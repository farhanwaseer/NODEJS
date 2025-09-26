from django.test import TestCase
from Restaurant.models import Menu, Booking
from datetime import datetime
from django.core.exceptions import ValidationError
from decimal import Decimal


class MenuTest(TestCase):
    def test_get_item(self):
        item = Menu.objects.create(Title="IceCream", Price=80, Inventory=100)
        self.assertEqual(str(item), "IceCream : 80")

    def test_menu_creation_with_decimal_price(self):
        item = Menu.objects.create(Title="Pizza", Price=Decimal("15.99"), Inventory=50)
        self.assertEqual(str(item), "Pizza : 15.99")
        self.assertEqual(item.Title, "Pizza")
        self.assertEqual(item.Price, Decimal("15.99"))
        self.assertEqual(item.Inventory, 50)

    def test_menu_negative_inventory(self):
        item = Menu.objects.create(Title="Pasta", Price=12.50, Inventory=-5)
        self.assertEqual(item.Inventory, -5)

    def test_menu_zero_price(self):
        item = Menu.objects.create(Title="Water", Price=0, Inventory=100)
        self.assertEqual(str(item), "Water : 0")

    def test_menu_long_title(self):
        long_title = "A" * 255
        item = Menu.objects.create(Title=long_title, Price=10, Inventory=20)
        self.assertEqual(item.Title, long_title)


class BookingTest(TestCase):
    def test_get_booking(self):
        booking = Booking.objects.create(
            Name="John Doe",
            No_of_guests=4,
            BookingDate=datetime(2024, 12, 25, 18, 0)
        )
        expected_str = "John Doe - 2024-12-25 18:00:00"
        self.assertEqual(str(booking), expected_str)

    def test_booking_single_guest(self):
        booking = Booking.objects.create(
            Name="Solo Diner",
            No_of_guests=1,
            BookingDate=datetime(2024, 12, 30, 12, 0)
        )
        self.assertEqual(booking.No_of_guests, 1)
        self.assertEqual(booking.Name, "Solo Diner")

    def test_booking_large_party(self):
        booking = Booking.objects.create(
            Name="Big Party",
            No_of_guests=50,
            BookingDate=datetime(2024, 12, 31, 20, 0)
        )
        self.assertEqual(booking.No_of_guests, 50)

    def test_booking_zero_guests(self):
        booking = Booking.objects.create(
            Name="Zero Guest",
            No_of_guests=0,
            BookingDate=datetime(2024, 12, 28, 15, 0)
        )
        self.assertEqual(booking.No_of_guests, 0)

    def test_booking_long_name(self):
        long_name = "B" * 255
        booking = Booking.objects.create(
            Name=long_name,
            No_of_guests=2,
            BookingDate=datetime(2024, 12, 29, 16, 0)
        )
        self.assertEqual(booking.Name, long_name)