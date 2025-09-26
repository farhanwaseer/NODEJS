from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User
from rest_framework.test import APIClient
from rest_framework import status
from rest_framework.authtoken.models import Token
from Restaurant.models import Menu, Booking
from Restaurant.serializers import MenuSerializer, BookingSerializer
from datetime import datetime
from decimal import Decimal


class MenuViewTest(TestCase):
    def setUp(self):
        self.client = APIClient()

        # Create test menu items
        self.menu1 = Menu.objects.create(
            Title="Pizza",
            Price=15.99,
            Inventory=50
        )
        self.menu2 = Menu.objects.create(
            Title="Pasta",
            Price=12.50,
            Inventory=30
        )
        self.menu3 = Menu.objects.create(
            Title="Salad",
            Price=8.99,
            Inventory=25
        )

    def test_getall(self):
        url = reverse('menu-list')
        response = self.client.get(url)

        menus = Menu.objects.all()
        serializer = MenuSerializer(menus, many=True)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_get_single_item(self):
        url = reverse('menu-detail', kwargs={'pk': self.menu1.ID})
        response = self.client.get(url)

        serializer = MenuSerializer(self.menu1)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_create_menu_item(self):
        url = reverse('menu-list')
        data = {
            'Title': 'Burger',
            'Price': '18.99',
            'Inventory': 40
        }
        response = self.client.post(url, data, format='json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Menu.objects.count(), 4)
        self.assertEqual(Menu.objects.latest('ID').Title, 'Burger')

    def test_update_menu_item(self):
        url = reverse('menu-detail', kwargs={'pk': self.menu1.ID})
        data = {
            'Title': 'Updated Pizza',
            'Price': '16.99',
            'Inventory': 45
        }
        response = self.client.put(url, data, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.menu1.refresh_from_db()
        self.assertEqual(self.menu1.Title, 'Updated Pizza')
        self.assertEqual(self.menu1.Price, Decimal('16.99'))

    def test_delete_menu_item(self):
        url = reverse('menu-detail', kwargs={'pk': self.menu1.ID})
        response = self.client.delete(url)

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Menu.objects.count(), 2)

    def test_menu_not_found(self):
        url = reverse('menu-detail', kwargs={'pk': 999})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


class BookingViewTest(TestCase):
    def setUp(self):
        self.client = APIClient()

        # Create test user
        self.user = User.objects.create_user(
            username='testuser',
            password='testpass123'
        )

        # Get token for authentication (created automatically by signal)
        self.token = Token.objects.get(user=self.user)

        # Create test booking
        self.booking1 = Booking.objects.create(
            Name="John Doe",
            No_of_guests=4,
            BookingDate=datetime(2024, 12, 25, 18, 0)
        )
        self.booking2 = Booking.objects.create(
            Name="Jane Smith",
            No_of_guests=2,
            BookingDate=datetime(2024, 12, 26, 19, 30)
        )

    def test_booking_list_authenticated(self):
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.token.key)
        url = reverse('booking-list')
        response = self.client.get(url)

        bookings = Booking.objects.all()
        serializer = BookingSerializer(bookings, many=True)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)

    def test_booking_list_unauthenticated(self):
        url = reverse('booking-list')
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(
            response.data['detail'],
            'Authentication credentials were not provided.'
        )

    def test_create_booking_authenticated(self):
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.token.key)
        url = reverse('booking-list')
        data = {
            'Name': 'Alice Johnson',
            'No_of_guests': 6,
            'BookingDate': '2024-12-28T19:00:00'
        }
        response = self.client.post(url, data, format='json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Booking.objects.count(), 3)
        self.assertEqual(Booking.objects.latest('ID').Name, 'Alice Johnson')

    def test_create_booking_unauthenticated(self):
        url = reverse('booking-list')
        data = {
            'Name': 'Unauthorized User',
            'No_of_guests': 3,
            'BookingDate': '2024-12-28T18:00:00'
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_update_booking_authenticated(self):
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.token.key)
        url = reverse('booking-detail', kwargs={'pk': self.booking1.ID})
        data = {
            'Name': 'Updated John Doe',
            'No_of_guests': 5,
            'BookingDate': '2024-12-25T19:00:00'
        }
        response = self.client.put(url, data, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.booking1.refresh_from_db()
        self.assertEqual(self.booking1.Name, 'Updated John Doe')
        self.assertEqual(self.booking1.No_of_guests, 5)

    def test_delete_booking_authenticated(self):
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.token.key)
        url = reverse('booking-detail', kwargs={'pk': self.booking1.ID})
        response = self.client.delete(url)

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Booking.objects.count(), 1)

    def test_invalid_token(self):
        self.client.credentials(HTTP_AUTHORIZATION='Token invalid_token_here')
        url = reverse('booking-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)


class MenuSerializerTest(TestCase):
    def test_valid_menu_serializer(self):
        data = {
            'Title': 'Test Dish',
            'Price': '12.99',
            'Inventory': 30
        }
        serializer = MenuSerializer(data=data)
        self.assertTrue(serializer.is_valid())

    def test_menu_serializer_missing_fields(self):
        data = {
            'Title': 'Incomplete Dish',
        }
        serializer = MenuSerializer(data=data)
        self.assertFalse(serializer.is_valid())
        self.assertIn('Price', serializer.errors)
        self.assertIn('Inventory', serializer.errors)


class BookingSerializerTest(TestCase):
    def test_valid_booking_serializer(self):
        data = {
            'Name': 'Test Customer',
            'No_of_guests': 4,
            'BookingDate': '2024-12-25T18:00:00'
        }
        serializer = BookingSerializer(data=data)
        self.assertTrue(serializer.is_valid())

    def test_booking_serializer_missing_fields(self):
        data = {
            'Name': 'Incomplete Booking',
        }
        serializer = BookingSerializer(data=data)
        self.assertFalse(serializer.is_valid())
        self.assertIn('No_of_guests', serializer.errors)
        self.assertIn('BookingDate', serializer.errors)


class TokenAuthenticationTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(
            username='authuser',
            password='authpass123'
        )

    def test_token_creation_on_user_creation(self):
        # Token should be created automatically for new user
        token_exists = Token.objects.filter(user=self.user).exists()
        self.assertTrue(token_exists)

    def test_token_authentication_endpoint(self):
        url = reverse('api_token_auth')
        data = {
            'username': 'authuser',
            'password': 'authpass123'
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('token', response.data)

    def test_invalid_credentials_token_auth(self):
        url = reverse('api_token_auth')
        data = {
            'username': 'authuser',
            'password': 'wrongpassword'
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)