import Warn from "../components/warning";
import Card from "../components/card";
import Button from "../components/button";
import Iphone from "/iphone2.png";
import IphonePreview from "/iphone3.png";
import Target from "/icons/target.png";
import Time from "/icons/time.png";
import Topdeals from "../components/topDeals";
import ImageSlider from "../components/imageSlider";

const Product = () => {
  return (
    <section className="font-family:'SF_Pro_Display-Bold',Helvetica] p-2 md:mx-20">
      <div className="grid grid-cols-3 gap-2  mt-10 mb-5 md:mb-0">
        <button className="producttopbuttons">All ads</button>
        <button className="producttopbuttons">mobile phones & tablets</button>
        <button className="producttopbuttons bg-green-600 text-white">
          {" "}
          iphone 14 pro max
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8 ">
        <section className="md:col-span-2">
          <div className="w-full">
            <Warn />
          </div>
          <section>
            <div className="w-full ">
              <ImageSlider />
            </div>

            <div className="flex gap-2 mt-4  w-full ">
              <div className=" w-40 h-40 md:w-52 md:h-44 pl-12 pr-12 py-4 bg-custom-gray rounded-2xl flex justify-center items-center">
                <img className="w-40 h-40 object-contain md:w-[147px] md:h-[147px]" src={Iphone} />
              </div>

              <div className=" w-40 h-40 md:w-52 md:h-44 pl-12 pr-12 py-4  bg-custom-gray rounded-2xl flex justify-center items-center">
                <img className="w-40 h-40 object-contain  md:w-[147px] md:h-[147px]" src={IphonePreview} />
              </div>
            </div>

            <div className="border-b-2 border-gray-100 py-4 md:py-6">
              <div className="flex items-center justify-between">
                <div className="">
                  <h1 className="md:w-96 text-black text-lg md:text-2xl font-semibold font-['SF Pro Display'] leading-normal">
                    iPhone 14 Pro Max
                  </h1>
                  <h2 className="md:w-96 text-black text-lg md:text-4xl font-bold font-['SF Pro Display'] leading-normal">
                    ₦1,200,000
                  </h2>
                </div>

                <div className="flex space-between">
                  <div className="h-11 px-4 md:px-7 bg-orange-100 rounded-2xl justify-center items-center gap-2.5 inline-flex">
                    <Button bg="text-orange-500" round="rounded-full">
                      <p className=" text-center text-sm md:text-base font-bold font-['SF Pro Display'] leading-normal">
                        Promoted
                      </p>
                    </Button>
                  </div>
                  <img
                    className="w-8 md:w-10 ml-5 h-10"
                    src="/icons/heart.svg"
                    alt=""
                  />
                </div>
              </div>

              <div className="  flex justify-between md:justify-start  mt-6 text-gray-600 text-sm md:text-base font-medium font-['SF Pro Display'] leading-normal">
                <div className="flex items-center gap-1">
                  <img className="w-4 h-4" src={Target} alt="" />
                  <p>Abuja, Nigeria</p>
                </div>
                <div className="flex items-center gap-1">
                  <img className="w-4 h-4" src={Time} alt="" />
                  <p>Posted 2 hours ago</p>
                </div>
                <div className="flex items-center gap-1">
                  <img className="w-4 h-4" src="/icons/views.png" alt="" />
                  <p>174 views</p>
                </div>
              </div>
            </div>

            <div className="border-b-2 border-gray-100  py-6">
              <h1 className="font-bold">Description:</h1>
              <p className="text-base text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                animi, reiciendis, vel veniam explicabo voluptatibus esse natus
                expedita, pariatur praesentium nihil nemo libero obcaecati?
                Voluptas temporibus sed obcaecati animi officiis.
              </p>
            </div>
            <div className="border-b-2 border-gray-100 text-base py-6">
              <table className="hidden md:table">
                <tr>
                  <td>Brand</td>
                  <td>Model</td>
                  <td>Condition 1</td>
                </tr>
                <tr>
                  <td>Apple</td>
                  <td>iphone 14 pro max</td>
                  <td>Used</td>
                </tr>
                <tr>
                  <td>Condition 2</td>
                  <td>Internal storage</td>
                  <td>Card slot</td>
                </tr>
                <tr>
                  <td>No crack</td>
                  <td>64gb</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Screen size</td>
                  <td>Ram</td>
                  <td>Card slot</td>
                </tr>
                <tr>
                  <td>Fill</td>
                  <td>Fill</td>
                  <td>No</td>
                </tr>
              </table>
                  {/* mobile */}
                  <table className="md:hidden">
                    <tr>
                      <td>Brand</td>
                      <td>Model</td>

                    </tr>
                    <tr>
                      <td>Apple</td>
                      <td>iphone 14 pro max</td>

                    </tr>
                    <tr>
                      <td>Condition 1</td>
                      <td>Internal storage</td>

                    </tr>
                    <tr>
                      <td>Used</td>
                      <td>64gb</td>

                    </tr>
                    <tr>
                      <td>Card slot</td>
                      <td>Ram</td>
                    </tr>
                    <tr>
                      <td>No</td>
                      <td>Fill</td>
                    </tr>
                    <tr>
                      <td>Card slot</td>
                      <td>Condition 2</td>
                    </tr>
                    <tr>
                      <td>No</td>
                      <td>No cracks</td>
                    </tr>
                    <tr>
                      <td>Screen size</td>
                      
                    </tr>
                    <tr>
                      <td>fill</td>
  
                    </tr>

                  </table>
              <div className="flex justify-end  py-6">
                <select className="text-green-600  bg-white p-2" name="" id="">
                  <option value="">View all</option>
                </select>
              </div>
            </div>
            <section>
              <div className="flex items-center text-base md:text-base  py-6">
                <img src="/icons/address.png" alt="" />
                <h2 className="text-green-600 font-semibold">
                  Vendors address
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 space-y-2 text-base text-gray-500">
                <div className="flex items-center gap-1">
                  <img className="w-4 h-4" src={Target} alt="" />
                  <p>Abuja, Nigeria</p>
                </div>

                <div className="flex items-center gap-1">
                  <img className="w-6 h-6" src={Time} alt="" />
                  <p>Open Monday - Saturday, 09:00 AM - 6:00 PM</p>
                </div>

                <div>Shop 34B, Bannex Plaza, Wuse II</div>
                <div className="h-11  w-48 bg-red-100 rounded-2xl justify-center items-center gap-2.5 inline-flex">
                  <p className="text-red-500 text-center text-base md:text-base font-bold font-['SF Pro Display'] leading-normal">
                    Closed Now
                  </p>
                </div>
              </div>
            </section>
          </section>
          <div className="grid grid-cols-2 gap-2 mt-10">
            <Button>
              <p className="text-white">Contact vendor</p>
            </Button>
            <Button>
              <p className="text-white">Make an order</p>
            </Button>
          </div>
          <div className="mt-2">
            <div className="flex justify-between p-6 items-center">
              <h2 className="font-semibold md:font-bold">Similar items</h2>
              <div className="hidden md:flex items-center gap-2 ">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_4742_1450)">
                      <path
                        d="M27.5 16.2487V25C27.5 25.3315 27.3683 25.6495 27.1339 25.8839C26.8995 26.1183 26.5815 26.25 26.25 26.25H16.25V16.2487H27.5ZM13.75 16.2487V26.25H3.75C3.41848 26.25 3.10054 26.1183 2.86612 25.8839C2.6317 25.6495 2.5 25.3315 2.5 25V16.2487H13.75ZM13.75 3.75V13.7487H2.5V5C2.5 4.66848 2.6317 4.35054 2.86612 4.11612C3.10054 3.8817 3.41848 3.75 3.75 3.75H13.75ZM26.25 3.75C26.5815 3.75 26.8995 3.8817 27.1339 4.11612C27.3683 4.35054 27.5 4.66848 27.5 5V13.7487H16.25V3.75H26.25Z"
                        fill="#6D7280"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4742_1450">
                        <rect width="30" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <p>View in grid</p>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M27.1875 9.6875H8.4375V7.1875H27.1875V9.6875ZM27.1875 16.25H8.4375V13.75H27.1875V16.25ZM27.1875 22.8125H8.4375V20.3125H27.1875V22.8125Z"
                      fill="#16A34A"
                    />
                    <path d="M5.625 7.5H3.75V9.375H5.625V7.5Z" fill="#16A34A" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.8125 7.5C2.8125 6.98223 3.23223 6.5625 3.75 6.5625H5.625C6.14277 6.5625 6.5625 6.98223 6.5625 7.5V9.375C6.5625 9.89277 6.14277 10.3125 5.625 10.3125H3.75C3.23223 10.3125 2.8125 9.89277 2.8125 9.375V7.5Z"
                      fill="#16A34A"
                    />
                    <path
                      d="M5.625 14.0625H3.75V15.9375H5.625V14.0625Z"
                      fill="#16A34A"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.8125 14.0625C2.8125 13.5447 3.23223 13.125 3.75 13.125H5.625C6.14277 13.125 6.5625 13.5447 6.5625 14.0625V15.9375C6.5625 16.4553 6.14277 16.875 5.625 16.875H3.75C3.23223 16.875 2.8125 16.4553 2.8125 15.9375V14.0625Z"
                      fill="#16A34A"
                    />
                    <path
                      d="M5.625 20.625H3.75V22.5H5.625V20.625Z"
                      fill="#16A34A"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.8125 20.625C2.8125 20.1072 3.23223 19.6875 3.75 19.6875H5.625C6.14277 19.6875 6.5625 20.1072 6.5625 20.625V22.5C6.5625 23.0178 6.14277 23.4375 5.625 23.4375H3.75C3.23223 23.4375 2.8125 23.0178 2.8125 22.5V20.625Z"
                      fill="#16A34A"
                    />
                  </svg>
                  <p> View in List</p>
                </div>
              </div>
            </div>
            <Topdeals maxItems={6} />
          </div>
        </section>
        {/* sidebar */}
        <section className="md:col-span-1 text-base md:text-base">
          <div className="bg-gray-100 border border-gray-200 shadow-custom md:border-none rounded-lg space-y-4 p-4 ">
            <h1 className="text-3xl font-bold">₦1,200,000</h1>
            <div className="flex items-center text-base">
              <p className="text-gray-600">Market Value: ₦930K ~ 1M </p>
              <img className="w-4 h-4" src="/icons/info.png" alt="" />
            </div>

            <button className="bg-white rounded-none  w-full mt-2 center p-4 text-base hover:text-gray-100 border-2 border-green-200">
              Price History
            </button>
          </div>

          <Card>
            <div class="flex items-center gap-4">
              <div class="w-24 h-24 bg-white rounded-full relative">
                <div class="w-16 h-16 absolute left-5 top-5">
                  <img src="/icons/anon.png" alt="" />
                </div>
                <div class="w-9 h-9 p-1.5 bg-orange-100 rounded-full border-2 border-white absolute left-16 md:left-20 top-14 flex justify-center items-center">
                  <div class="w-6 h-6 flex">
                    <img src="/icons/tick.png" alt="" />
                  </div>
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <div class="text-gray-900 text-2xl font-medium">
                  OneRealGadget
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-gray-600 text-xs">
                    About 2yrs on JamezSpace
                  </span>
                  <div class="px-2 py-1 bg-orange-100 rounded-md flex items-center">
                    <span class="text-orange-600 text-xs">Verified User</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-4">
              <button class="w-full py-3 bg-green-600 text-white text-base font-medium rounded-lg flex items-center justify-center gap-2">
                <img className="w-5 h-5" src="/icons/Frame1.png" alt="" />{" "}
                Contact Vendor
              </button>

              <button class="w-full py-3 bg-green-600 text-white text-base font-medium rounded-lg flex items-center justify-center gap-2">
                <img className="w-5 h-5" src="/icons/scan.png" alt="" /> Make an
                Offer
              </button>
            </div>
          </Card>
          <Card>
            <div class="text-2xl font-bold text-black mb-6">
              Reviews and Ratings
            </div>

            <div class=" rounded-lg py-6 flex gap-4 mb-6">
              <img
                class="w-14 h-14 rounded-full"
                src="/user.png"
                alt="Profile"
              />
              <div class="flex flex-col flex-1 gap-2">
                <div class="flex justify-between items-start">
                  <div class="text-black text-lg font-bold">
                    John Malcolm
                    <div className="flex gap-1">
                      {Array(4)
                        .fill(0)
                        .map((_, index) => (
                          <img
                            key={index}
                            className="w-5 h-5"
                            src="/icons/star.png"
                            alt="Star Icon"
                          />
                        ))}
                      <img className="w-5 h-5" src="/icons/star1.png" alt="" />
                    </div>
                  </div>
                  <div class="text-base text-black opacity-20">24 June, 2024</div>
                </div>
                <p class="text-gray-500 text-base">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit arcu
                  aliquam, leo neque lacinia sagittis venenatis nullam dictumst
                  torquent. Lorem ipsum dolor sit amet consectetur adipiscing
                  elit arcu aliquam, leo neque lacinia sagittis venenatis nullam
                  dictumst torquent.
                </p>
              </div>
            </div>

            <div class="bg-green-600 text-white text-center text-base font-medium py-3 rounded-lg">
              View More (20+ reviews)
            </div>
          </Card>
          <Card>
            <div class="text-2xl font-bold text-black mb-4">Share Items</div>
            <div class="flex justify-start items-center space-x-8">
              <div class="p-2 bg-green-600 rounded-full flex justify-center items-center">
                <div class="w-8 h-8">
                  <img src="/icons/facebook.png" alt="" />
                </div>
              </div>
              <div class="p-2 bg-green-600 rounded-full flex justify-center items-center">
                <div class="w-8 h-8">
                  <img src="/icons/whatsapp.png" alt="" />
                </div>
              </div>
              <div class="p-2 bg-green-600 rounded-full flex justify-center items-center">
                <div class="w-8 h-8">
                  <img src="/icons/instagram.png" alt="" />
                </div>
              </div>
              <div class="p-2 bg-green-600 rounded-full flex justify-center items-center">
                <div class="w-8 h-8">
                  <img src="/icons/linktree.png" alt="" />
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <h1 className="productheaders">Jamezspace safety tips </h1>
            <ol>
              <li>1. Never pay in advance, even for delivery charges</li>
              <li>2. Arrange to meet the seller in a safe, public location.</li>
              <li>
                3. Thoroughly inspect the item to ensure it meets your
                expectations.
              </li>
              <li>
                4. Confirm that the packed item is the same one you have
                inspected.
              </li>
              <li>
                5. Only make payment once you are completely satisfied with the
                item.
              </li>
            </ol>
            <Button bg="bg-orange-100" className="text-0range-600">
              Mark Product as Unavailable
            </Button>
            <Button bg="bg-red-100">
              <div className="text-red-600 justify-center flex items-center">
                <img src="/flag.png" alt="" />
                <p>Report Abuse</p>
              </div>
            </Button>
          </Card>

          <div className="m-auto">
            <div class="relative bg-orange-400 mt-6 h-ads rounded-2xl overflow-hidden">
              <img src="/lady.png" alt="Product Image" className="  w-full " />
              <div className="w-full absolute bottom-0 h-60 items-center justify-center inline-flex   bg-gradient-to-t from-orange-400 via-orange-500 to-transparent">
                <div className="m-8 -mt-6   space-y-6 to-orange-400">
                  <h2 className="text-3xl font-semibold text-white leading-tight">
                    Reach thousands of buyers with ease on JamezSpace.
                  </h2>

                  <button class="text-center text-white text-base font-medium font-['SF Pro Display'] leading-normal py-2 px-4 rounded border border-white">
                    Start Selling
                  </button>







                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Product;
