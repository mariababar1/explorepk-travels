import { useEffect, useState } from "react";

function AdminDashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(
          "http://localhost:5000/api/admin/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to load dashboard");
        }

        setDashboard(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return <h2>Loading Admin Dashboard...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>ExplorePK Admin Dashboard</h1>

      <h2>Total Users: {dashboard.stats.totalUsers}</h2>

      <h2>Total Bookings: {dashboard.stats.totalBookings}</h2>

      <h3>Recent Bookings</h3>

      {dashboard.recentBookings.map((booking) => (
        <div key={booking._id}>
          <p>Name: {booking.fullName}</p>
          <p>Destination: {booking.destination}</p>
          <p>Package: {booking.package}</p>
        </div>
      ))}

      <h3>Popular Destinations</h3>

      {dashboard.popularDestinations.map((destination) => (
        <p key={destination._id}>
          {destination._id}: {destination.bookings} bookings
        </p>
      ))}
    </div>
  );
}

export default AdminDashboard;