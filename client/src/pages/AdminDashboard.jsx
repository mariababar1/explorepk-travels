import "./AdminDashboard.css";

function AdminDashboard({ onBackToWebsite }) {
  // Demo dashboard data
  const dashboard = {
    stats: {
      totalUsers: 24,
      totalBookings: 18,
    },

    recentBookings: [
      {
        _id: "1",
        fullName: "Maria Babar",
        destination: "Hunza",
        package: "Honeymoon",
      },
      {
        _id: "2",
        fullName: "Ali Khan",
        destination: "Skardu",
        package: "Friends",
      },
      {
        _id: "3",
        fullName: "Ayesha Ahmed",
        destination: "Murree",
        package: "Family",
      },
      {
        _id: "4",
        fullName: "Hamza Malik",
        destination: "Swat",
        package: "Adventure",
      },
      {
        _id: "5",
        fullName: "Fatima Noor",
        destination: "Naran Kaghan",
        package: "Family",
      },
    ],

    popularDestinations: [
      {
        _id: "Hunza",
        bookings: 8,
      },
      {
        _id: "Skardu",
        bookings: 6,
      },
      {
        _id: "Murree",
        bookings: 5,
      },
      {
        _id: "Swat",
        bookings: 4,
      },
      {
        _id: "Naran Kaghan",
        bookings: 3,
      },
    ],
  };

  return (
    <div className="admin-layout">

      {/* ================= SIDEBAR ================= */}

      <aside className="admin-sidebar">

        <div className="admin-logo">

          <div className="admin-logo-icon">
            ✈
          </div>

          <div>
            <h2>ExplorePK</h2>
            <span>ADMIN PANEL</span>
          </div>

        </div>

        <nav className="admin-nav">

          <a
            href="#dashboard"
            className="active"
          >
            <span>▣</span>
            Dashboard
          </a>

          <a href="#users">
            <span>♙</span>
            Users
          </a>

          <a href="#bookings">
            <span>▤</span>
            Bookings
          </a>

          <a href="#destinations">
            <span>⌖</span>
            Destinations
          </a>

          <a href="#reviews">
            <span>★</span>
            Reviews
          </a>

          <a href="#settings">
            <span>⚙</span>
            Settings
          </a>

        </nav>

        <div className="admin-sidebar-bottom">

          <div className="admin-profile-mini">

            <div className="admin-avatar">
              A
            </div>

            <div>
              <strong>Administrator</strong>
              <small>Super Admin</small>
            </div>

          </div>

          <button
            className="admin-logout"
            onClick={onBackToWebsite}
          >
            <span>↪</span>
            Back to Website
          </button>

        </div>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="admin-main">

        {/* TOP BAR */}

        <header className="admin-topbar">

          <div>

            <p className="admin-breadcrumb">
              Admin / Dashboard
            </p>

            <h1>
              Dashboard
            </h1>

          </div>


          <div className="admin-topbar-right">

            <div className="admin-notification">
              🔔
            </div>

            <div className="admin-user">

              <div className="admin-avatar">
                A
              </div>

              <div>
                <strong>
                  Administrator
                </strong>

                <span>
                  Super Admin
                </span>
              </div>

            </div>

          </div>

        </header>


        {/* WELCOME */}

        <section className="admin-welcome">

          <div>

            <h2>
              Welcome back, Administrator 👋
            </h2>

            <p>
              Here's what's happening with your
              ExplorePK travel platform today.
            </p>

          </div>

          <div className="admin-date">
            📅 {new Date().toLocaleDateString()}
          </div>

        </section>


        {/* ================= STAT CARDS ================= */}

        <section className="admin-stats">

          {/* USERS */}

          <div className="admin-stat-card">

            <div className="stat-icon users-icon">
              ♙
            </div>

            <div>

              <span>
                Total Users
              </span>

              <h3>
                {dashboard.stats.totalUsers}
              </h3>

              <small>
                Registered users
              </small>

            </div>

          </div>


          {/* BOOKINGS */}

          <div className="admin-stat-card">

            <div className="stat-icon booking-icon">
              ▤
            </div>

            <div>

              <span>
                Total Bookings
              </span>

              <h3>
                {dashboard.stats.totalBookings}
              </h3>

              <small>
                Travel bookings
              </small>

            </div>

          </div>


          {/* DESTINATIONS */}

          <div className="admin-stat-card">

            <div className="stat-icon destination-icon">
              ⌖
            </div>

            <div>

              <span>
                Popular Places
              </span>

              <h3>
                {dashboard.popularDestinations.length}
              </h3>

              <small>
                Top destinations
              </small>

            </div>

          </div>


          {/* ACTIVITY */}

          <div className="admin-stat-card">

            <div className="stat-icon activity-icon">
              ✦
            </div>

            <div>

              <span>
                Recent Activity
              </span>

              <h3>
                {dashboard.recentBookings.length}
              </h3>

              <small>
                Latest bookings
              </small>

            </div>

          </div>

        </section>


        {/* ================= CONTENT ================= */}

        <section className="admin-content-grid">


          {/* RECENT BOOKINGS */}

          <div className="admin-panel booking-panel">

            <div className="panel-header">

              <div>

                <h2>
                  Recent Bookings
                </h2>

                <p>
                  Latest customer bookings
                </p>

              </div>

              <span className="panel-badge">
                Live
              </span>

            </div>


            <div className="booking-table-wrapper">

              <table className="admin-table">

                <thead>

                  <tr>

                    <th>
                      Customer
                    </th>

                    <th>
                      Destination
                    </th>

                    <th>
                      Package
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {dashboard.recentBookings.map(
                    (booking) => (

                      <tr key={booking._id}>

                        <td>

                          <div className="customer-cell">

                            <div className="customer-avatar">

                              {booking.fullName
                                ?.charAt(0)
                                .toUpperCase()}

                            </div>

                            <div>

                              <strong>
                                {booking.fullName}
                              </strong>

                              <small>
                                Customer
                              </small>

                            </div>

                          </div>

                        </td>


                        <td>

                          <span className="destination-tag">

                            📍 {booking.destination}

                          </span>

                        </td>


                        <td>

                          <span className="package-tag">

                            {booking.package}

                          </span>

                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          </div>


          {/* POPULAR DESTINATIONS */}

          <div className="admin-panel destinations-panel">

            <div className="panel-header">

              <div>

                <h2>
                  Popular Destinations
                </h2>

                <p>
                  Most booked locations
                </p>

              </div>

            </div>


            <div className="destination-list">

              {dashboard.popularDestinations.map(
                (destination, index) => (

                  <div
                    className="destination-item"
                    key={destination._id}
                  >

                    <div className="destination-rank">
                      {index + 1}
                    </div>


                    <div className="destination-info">

                      <strong>
                        {destination._id}
                      </strong>

                      <div className="destination-progress">

                        <span
                          style={{
                            width: `${
                              Math.min(
                                destination.bookings * 10,
                                100
                              )
                            }%`,
                          }}
                        ></span>

                      </div>

                    </div>


                    <div className="destination-count">

                      <strong>
                        {destination.bookings}
                      </strong>

                      <small>
                        bookings
                      </small>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </section>


        {/* ================= FOOTER ================= */}

        <div className="admin-footer">

          <span>
            © 2026 ExplorePK Travels
          </span>

          <span>
            Admin Dashboard • MERN Platform
          </span>

        </div>

      </main>

    </div>
  );
}

export default AdminDashboard;