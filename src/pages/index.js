import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div id="content-wrapper" class="d-flex flex-column">
      <div
        class="shadow"
        style={{ border: `1px solid rgba(0,0,0,.125)`, marginBottom: `1.5rem` }}
      >
        <StaticImage
          src="../images/brand-pic.png"
          alt="Main Branding Picture"
        />
      </div>
      <div class="row">
        <div class="col-xl-4 col-md-4 col-sm-12 mb-4">
          <div class="card border-left-info shadow h-100 py-2">
            <div class="card-body">
              <h2 class="price-title">
                1000
                <sup>$</sup>
              </h2>
              <h3 class="set-description">Total value of Disbursement</h3>

              <div class="bar-set">
                <div class="subtitle-box">
                  <span>Policy</span>
                  <span class="money-amount">
                    400<sup>$</sup>
                  </span>
                </div>

                <div class="progress progress-sm mr-2">
                  <div
                    class="progress-bar bg-info-1"
                    role="progressbar"
                    style={{ width: `30%`, backgroundColor: `#6c4ad4` }}
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="bar-set">
                <div class="subtitle-box">
                  <span>Claim</span>
                  <span class="money-amount">
                    800<sup>$</sup>
                  </span>
                </div>
                <div class="progress progress-sm mr-2">
                  <div
                    class="progress-bar bg-info-2"
                    role="progressbar"
                    style={{ width: `70%`, backgroundColor: `#6ad2a3` }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-4 col-sm-12 mb-4">
          <div class="card border-left-info shadow h-100 py-2">
            <div class="card-body">
              <h2 class="price-title">
                2500
                <sup>$</sup>
              </h2>
              <h3 class="set-description">Total value of Disbursement</h3>

              <div class="bar-set">
                <div class="subtitle-box">
                  <span>Policy</span>
                  <span class="money-amount">
                    450<sup>$</sup>
                  </span>
                </div>

                <div class="progress progress-sm mr-2">
                  <div
                    class="progress-bar bg-info-1"
                    role="progressbar"
                    style={{ width: `45%`, backgroundColor: `#6c4ad4` }}
                    aria-valuenow="45"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="bar-set">
                <div class="subtitle-box">
                  <span>Claim</span>
                  <span class="money-amount">
                    800<sup>$</sup>
                  </span>
                </div>
                <div class="progress progress-sm mr-2">
                  <div
                    class="progress-bar bg-info-2"
                    role="progressbar"
                    style={{ width: `90%`, backgroundColor: `#6ad2a3` }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-4 col-sm-12 mb-4">
          <div class="card border-left-info shadow h-100 py-2">
            <div class="card-body">
              <h2 class="price-title">
                4300
                <sup>$</sup>
              </h2>
              <h3 class="set-description">Total value of Disbursement</h3>

              <div class="bar-set">
                <div class="subtitle-box">
                  <span>Policy</span>
                  <span class="money-amount">
                    1560<sup>$</sup>
                  </span>
                </div>

                <div class="progress progress-sm mr-2">
                  <div
                    class="progress-bar bg-info-1"
                    role="progressbar"
                    style={{ width: `80%`, backgroundColor: `#6c4ad4` }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="bar-set">
                <div class="subtitle-box">
                  <span>Claim</span>
                  <span class="money-amount">
                    780<sup>$</sup>
                  </span>
                </div>
                <div class="progress progress-sm mr-2">
                  <div
                    class="progress-bar bg-info-2"
                    role="progressbar"
                    style={{ width: `40%`, backgroundColor: `#6ad2a3` }}
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
