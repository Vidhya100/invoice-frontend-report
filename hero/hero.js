import Button from "../button/button";

function Hero() {
  return (
    <div class="hero-container page-body-wrapper">
      <div class="main-container">
        <div class="content">
          <h4 class="heading">Payment Summary</h4>
          <div>
            <div class="btn-container">
              <div class="btn-group">
                <div class="flex-wrap">
                  <div class="column-filter dropdown">
                    <Button type="button" class="btn btn--filter">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="feather feather-layout"><rect x="3" y="3"
                          width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9">
                        </line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                    </Button>
                  </div>

                  <Button type="button" class="btn d-block  d-sm-none btn-toggle-filters">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-filter">
                      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3">
                      </polygon></svg>
                    Filters
                  </Button>

                  <span class="mobile-filters-wrapper">
                    <div class="btn-group-container">
                      <div class="date_container calendar">
                        <div class="date_input">
                          <span class="date">Date</span>
                        </div>
                      </div>
                    </div>
                  </span>

                  <Button type="button" class="btn btn--filter btn-toggle-filters">
                      payment method
                  </Button>


                  <Button type="button" class="btn btn--filter btn-toggle-filters client">
                      Clients
                  </Button>
                </div>
              </div>
              <div class="single-search-wrapper">
                <div class="search">
                  <span class="form-control-feedback">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round" class="feather feather-search">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </span>
                  <input type="text" placeholder="Search" class="form-control" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}
export default Hero;
