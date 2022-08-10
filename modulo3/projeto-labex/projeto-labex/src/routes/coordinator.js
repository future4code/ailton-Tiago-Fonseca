



export const goToListTripsPage = (navigate) => {
    navigate("/trips/list")
  }

export  const goToLoginPage = (navigate) => {
    navigate("/login")
  }

  export  const goToHomePage = (navigate) => {
    navigate("/")
  }

  export  const goToAdminHomePage = (navigate) => {
    navigate("/admin/trips/list")
  }

  export  const goToCreateTripPage = (navigate) => {
    navigate("/admin/trips/create")
  }

  export  const goToApplicationFormPage = (navigate) => {
    navigate("/application")
  }

  export  const  goToTripDatailsPage = (navigate) => {
    navigate("/admin/trips/:id")
  }
 