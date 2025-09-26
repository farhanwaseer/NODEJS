# Little Lemon Project - Notizen

## Django Admin Zugang
- **URL:** http://localhost:8000/admin/
- **Username:** admin
- **Passwort:** admin123

## Datenbank-Zugang (MySQL)
- **Host:** 127.0.0.1
- **Port:** 33076
- **Database:** zephyx_main
- **User:** zephyx_admin
- **Password:** zephyx_pass_2024!

## phpMyAdmin
- **URL:** http://localhost:8897
- **Login:** Wie MySQL-Zugang oben

## Models erstellt
- **Menu:** ID, Title, Price, Inventory
- **Booking:** ID, Name, No_of_guests, BookingDate

## Testdaten
- 5 Menu-Einträge (Greek Salad, Bruschetta, etc.)
- 4 Buchungen (John Smith, Maria Garcia, etc.)

## Development Commands
```bash
python manage.py runserver 0.0.0.0:8000  # Start development server
python manage.py makemigrations           # Create migrations
python manage.py migrate                  # Apply migrations
python manage.py shell                    # Django shell
```