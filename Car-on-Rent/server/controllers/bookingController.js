import Car from "../models/Car.js";
import Booking from "./../models/Booking.js";

// Funtion to check availability of Car for a given date
const checkAvailability = async (car, pickupDate, returnDate) => {
  const bookings = await Booking.find({
    car,
    pickupDate: { $lte: returnDate },
    returnDate: { $gte: pickupDate },
  });
  return bookings.length === 0;
};

// API to Check Availability of cars for the given date and location

export const checkAvailabilityOfCar = async (req, res) => {
  try {
    const { location, pickupDate, returnDate } = req.body;
    // fatch all available   cars for the given location
    const cars = await Car.find({ location, isAvaliable: true });
    //  Check Availability of cars for the given date range  using promise
    const avaliableCarsPromises = cars.map(async (car) => {
      const isAvaliable = await checkAvailability(
        car._id,
        pickupDate,
        returnDate
      );
      return { ...car._doc, isAvaliable: isAvaliable };
    });
    let availableCars = await Promise.all(avaliableCarsPromises);
    availableCars = availableCars.filter((car) => car.isAvaliable === true);

    res.json({ success: true, availableCars });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// API to create booking
export const createBooking = async () => {
  try {
    const { _id } = req.user;
    const { car, pickupDate, returnDate } = req.body;
    const isAvaliable = await checkAvailability(car, pickupDate, returnDate);
    if (!isAvaliable) {
      return res.json({ success: false, message: "Car is not available" });
    }
    const carData = await Car.findById(car);
    // Calculate price based on pickupdate and returndate
    const picked = new Date(pickupDate);
    const returned = new Date(returnDate);
    const numOfDays = Math.ceil((returned - picked) / (1000 * 60 * 60 * 24));
    const price = carData.pricePerDay * numOfDays;

    // Create booking
    await Booking.create({
      car,
      owner: carData.owner,
      user: _id,
      pickupDate,
      returnDate,
      price,
    });

    res.json({ success: true, message: "Booking Created" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// API to list User bookings
export const getUserBookings = async (req, res) => {
  try {
    const { _id } = req.user;
    const bookings = await Booking.find({ user: _id })
      .populate("car")
      .sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// API to list Owner  bookings

export const getOwnerBookings = async (req, res) => {
  try {
    if (req.user.role !== "owner") {
      return res.json({ success: false, message: "UnAuthorized" });
    }
    const bookings = await Booking.find({ owner: req.user._id })
      .populate("car user")
      .select("-user.passwaord")
      .sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// API to change  bookings Status

export const changeBookingsStatus = async (req, res) => {
  try {
    const { _id } = req.user;
    const { bookingId, status } = req.body;
    const booking = await Booking.findById(bookingId);
    if (booking.owner.toString() !== _id.toString()) {
      return res.json({ success: false, message: "UnAuthorized" });
    }
    booking.status = status;
    await booking.save();
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// =bn

//  Optimized Code Logic  GPT

// import Car from "../models/Car.js";
// import Booking from "../models/Booking.js";

// export const checkAvailabilityOfCar = async (req, res) => {
//   try {
// const { location, pickupDate, returnDate } = req.body;

// 1️⃣ Find all cars in the given location that are active/available
// const allCars = await Car.find({ location, isAvaliable: true });

// if (allCars.length === 0) {
//   return res.json({ success: true, availableCars: [] });
// }

// 2️⃣ Find all bookings that overlap with the requested date range
// const bookedCars = await Booking.find({
//   pickupDate: { $lte: returnDate },
//   returnDate: { $gte: pickupDate },
// }).distinct("car"); // get only car IDs

// 3️⃣ Filter out cars that are in the bookedCars list
// const availableCars = allCars.filter(
//   (car) => !bookedCars.includes(car._id.toString())
// );

// 4️⃣ Return available cars
//     res.json({ success: true, availableCars });
//   } catch (error) {
//     console.error(error.message);
//     res.json({ success: false, message: error.message });
//   }
// };
