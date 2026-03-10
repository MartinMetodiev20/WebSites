# PRD: Chichovtsi Restaurant Website

## Original Problem Statement
Create a modern, visually stunning, mobile-first website for a Bulgarian restaurant called **Пицария Ресторант "Чичовци" (Chichovtsi Pizzeria Restaurant)** located in Sofia, Bulgaria. The website should feel premium, cozy, authentic, and appetizing with conversion-optimized design.

## User Choices
1. **Language**: Bulgarian + English with toggle
2. **Images**: Professional stock images (selected via vision_expert_agent)
3. **Menu System**: Dynamic menu with backend admin panel
4. **Ordering**: Integrated ordering system with shopping cart
5. **Reservations**: Simple contact form

## Architecture
- **Frontend**: React + Tailwind CSS + shadcn/ui components
- **Backend**: FastAPI + Python (to be implemented)
- **Database**: MongoDB
- **State Management**: React Context API (Language, Cart)

## Core Features (Static Requirements)

### User-Facing Features
1. **Bilingual Support**: Bulgarian/English language toggle
2. **Hero Section**: Full-screen with call-to-action buttons
3. **About Section**: Restaurant story with image gallery
4. **Menu System**: 
   - Categorized menu (Pizza, Bulgarian Cuisine, Mains, Drinks)
   - Add to cart functionality
   - Shopping cart with quantity management
5. **Order System**: Integrated online ordering with cart
6. **Gallery**: Visual showcase of food and restaurant
7. **Reviews**: Customer testimonials with ratings
8. **Reservation Form**: Contact form for table bookings
9. **Location**: Google Maps integration
10. **Responsive Design**: Mobile-first approach

### Admin Features (Backend - Not Yet Implemented)
- Menu management (CRUD operations)
- Order management
- Reservation management
- Admin authentication

## What's Been Implemented (Dec 10, 2025)

### Frontend Complete ✅
- [x] Language context with BG/EN toggle
- [x] Shopping cart context with local storage
- [x] Header with sticky navigation
- [x] Hero section with parallax background
- [x] About section with image grid
- [x] Menu section with tabbed categories
- [x] Cart component with quantity management
- [x] Order form with delivery/pickup options
- [x] Gallery with hover effects
- [x] Reviews section with star ratings
- [x] Contact section with reservation form
- [x] Footer with complete information
- [x] Google Maps integration
- [x] Toast notifications (Sonner)
- [x] Smooth scrolling and animations
- [x] Mock data in `/app/frontend/src/mock.js`

### Components Created
1. `Header.js` - Navigation with language/cart
2. `Hero.js` - Hero section with CTAs
3. `About.js` - Restaurant story
4. `Menu.js` - Menu display with categories
5. `Cart.js` - Shopping cart sidebar
6. `OrderForm.js` - Order completion form
7. `Gallery.js` - Image gallery
8. `Reviews.js` - Customer reviews
9. `Contact.js` - Reservation form + map
10. `Footer.js` - Footer with links
11. Context providers (Language, Cart)

### Mock Data Structure
- **Menu Items**: Pizza, Bulgarian food, mains, drinks
- **Gallery Images**: 8 professional photos
- **Reviews**: 4 customer testimonials
- **Restaurant Info**: Address, phone, hours, rating

## Backend API Contracts (To Be Implemented)

### Menu Management
- `GET /api/menu` - Get all menu items
- `GET /api/menu/:category` - Get items by category
- `POST /api/admin/menu` - Create menu item (admin)
- `PUT /api/admin/menu/:id` - Update menu item (admin)
- `DELETE /api/admin/menu/:id` - Delete menu item (admin)

### Order Management
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order details
- `GET /api/admin/orders` - Get all orders (admin)
- `PUT /api/admin/orders/:id` - Update order status (admin)

### Reservation Management
- `POST /api/reservations` - Create reservation
- `GET /api/admin/reservations` - Get all reservations (admin)
- `PUT /api/admin/reservations/:id` - Update reservation (admin)

### Admin Authentication
- `POST /api/admin/login` - Admin login
- `POST /api/admin/logout` - Admin logout
- JWT-based authentication

## Prioritized Backlog

### P0 (Critical - Backend Implementation)
1. Menu CRUD API endpoints
2. Order management system
3. Reservation system
4. Admin authentication
5. Database models (Menu, Orders, Reservations, Admin)
6. Integration with frontend (remove mock data)

### P1 (Important Enhancements)
1. Admin dashboard UI
2. Order status tracking
3. Email notifications for orders/reservations
4. Payment integration (Stripe)
5. Image upload for menu items

### P2 (Nice to Have)
1. User accounts
2. Order history
3. Favorites/wishlist
4. Newsletter signup
5. Social media feed integration
6. Multi-restaurant support

## Next Tasks
1. ✅ Create frontend with mock data
2. 🔄 Build backend APIs
3. 🔄 Create database models
4. 🔄 Integrate frontend with backend
5. 🔄 Add admin dashboard
6. 🔄 Testing and deployment

## Technical Notes
- All images selected via vision_expert_agent
- Using shadcn/ui components for consistency
- Warm color palette: red (#dc2626), cream, dark wood
- Mobile-first responsive design
- Smooth animations and transitions
