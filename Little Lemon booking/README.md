# Little Lemon Restaurant API - Test Endpoints

Please test the following API endpoints:

## Authentication Endpoints
/auth/users/                    # User registration
/auth/token/login/              # Login and get token
/auth/token/logout/             # Logout and invalidate token
/restaurant/api-token-auth/     # Alternative token auth endpoint

## Menu API (No authentication required)
/restaurant/menu/               # GET: List all menu items, POST: Create new menu item
/restaurant/menu/{id}/          # GET/PUT/DELETE: Individual menu item operations

## Booking API (Authentication required - use Token in Authorization header)
/restaurant/booking/tables/     # GET: List all bookings, POST: Create new booking
/restaurant/booking/tables/{id}/ # GET/PUT/DELETE: Individual booking operations

## Static Content
/                               # Home page with Little Lemon restaurant information

## Admin Interface
/admin/                         # Django admin interface

## Usage Instructions

1. First register a new user: POST /auth/users/
2. Login to get token: POST /auth/token/login/
3. Use token in Authorization header: "Token your_token_here"
4. Test menu endpoints (no auth needed)
5. Test booking endpoints (auth required)

## Example Payloads

### User Registration:
```json
{
  "username": "testuser",
  "password": "securepass123",
  "email": "test@example.com"
}
```

### Login:
```json
{
  "username": "testuser",
  "password": "securepass123"
}
```

### Menu Item:
```json
{
  "Title": "Greek Salad",
  "Price": "12.99",
  "Inventory": 30
}
```

### Booking:
```json
{
  "Name": "John Doe",
  "No_of_guests": 4,
  "BookingDate": "2024-12-25T18:00:00"
}
```

## Tech Stack
- Django 5.2.6
- Django REST Framework
- MySQL Database
- Djoser Authentication

## Development Setup
```bash
# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start development server
python manage.py runserver 0.0.0.0:8000
```

## Admin Access
- URL: http://localhost:8000/admin/
- Username: admin
- Password: admin123
