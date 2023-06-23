import React from 'react';

export default function Services() {
  const services = [
    {
      id: 0,
      image: '../images/blue file.png',
      title: ' Article Writing',
      description:
        'Lörem ipsum polysam spetila pyde. Trapolig regnbågsbarn och beligt ehylig viktigt',
      arrow: '../images/blue arrow.png',
      border: '[#267BFF]',
    },
    {
      id: 1,
      image: '../images/cyan file.png',
      title: 'Content Writing',
      description:
        'Lörem ipsum polysam spetila pyde. Trapolig regnbågsbarn och beligt ehylig viktigt',
      arrow: '../images/cyan arrow.png',
      border: '[#21DAFF]',
    },
    {
      id: 2,
      image: '../images/orange file.png',
      title: ' Ebook Writing',
      description:
        'Lörem ipsum polysam spetila pyde. Trapolig regnbågsbarn och beligt ehylig viktigt',
      arrow: '../images/orange arrow.png',
      border: '[#FF834B]',
    },
    {
      id: 3,
      image: '../images/yellow file.png',
      title: ' Article Writing',
      description:
        'Lörem ipsum polysam spetila pyde. Trapolig regnbågsbarn och beligt ehylig viktigt',
      arrow: '../images/yellow arrow.png',
      border: '[#FF9318]',
    },
    {
      id: 4,
      image: '../images/purple file.png',
      title: 'Content Writing',
      description:
        'Lörem ipsum polysam spetila pyde. Trapolig regnbågsbarn och beligt ehylig viktigt',
      arrow: '../images/purple arrow.png',
      border: '[#5252FF]',
    },
    {
      id: 5,
      image: '../images/pink file.png',
      title: 'Ebook Writing',
      description:
        'Lörem ipsum polysam spetila pyde. Trapolig regnbågsbarn och beligt ehylig viktigt',
      arrow: '../images/pink arrow.png',
      border: '[#E72AFF]',
    },
  ];
  return (
    <div className="service_section">
      <section className=" service-section  w-full max-w-[1525px] mx-auto mt-[92px] ">
        <h2 className="text-center font-bold text-[25px]">
          Our Service and Prices
        </h2>
        <div className="text-center pt-5 pb-[98px] max-w-4xl mx-auto text-[14px] md:text-[18px]">
          <p>
            ContentAlpha offers optimal solutions at affordable rates for every
            content need. Understanding your requirements and generating results
            that satisfy you is our core mission. With us, you will be able to
            get the maximum possible ROI.
          </p>
        </div>
        {/* <section className="services flex gap-11 justify-center flex-wrap mx-auto items-center max-w-[1032px]">
          <div className=" article_service w-[250px] h-64 p-5 border-2 rounded-xl border-[#267BFF]">
            <img src="../images/blue file.png" alt="" />
            <h4 className="text-[#267BFF] font-bold pt-5 pb-3">
              Article Writing
            </h4>
            <p className="text-[#999999] pb-5">
              Lörem ipsum polysam spetila pyde. Trapolig regnbågsbarn och beligt
              ehylig viktigt
            </p>
            <a href="">
              <img src="../images/blue arrow.png" />
            </a>
          </div>
          <div className=" content_services w-[250px] shadow-md  h-64 p-5 border-2 rounded-xl border-[#21DAFF]">
            <img src="../images/cyan file.png" alt="" />
            <h4 className="text-[#21DAFF] font-bold pt-5 pb-3">
              Content Writing
            </h4>
            <p className="text-[#999999] pb-5">
              Lörem ipsum polysam spetila pyde. Trapolig regnbågsbarn och beligt
              ehylig viktigt
            </p>
            <a href="">
              <img src="../images/cyan arrow.png" alt="" />
            </a>
          </div>
          <div className="ebook_services w-[250px] h-64 p-5 shadow-md  border-2 rounded-xl border-[#FF834B]">
            <img src="../images/orange file.png" alt="" />
            <h4 className="text-[#FF834B] font-bold pt-5 pb-3">
              Ebook Writing
            </h4>
            <p className="text-[#999999] pb-5">
              Lörem ipsum polysam spetila pyde. Trapolig regnbågsbarn och beligt
              ehylig viktigt
            </p>
            <a href="">
              <img src="../images/orange arrow.png" alt="" />
            </a>
          </div>
          <div className=" article_writing w-[250px] h-64 p-5 border-2 shadow-md  rounded-xl border-[#FF9318]">
            <img src="../images/yellow file.png" alt="" />
            <h4 className="text-[#FF9318] font-bold pt-5 pb-3">
              Article Writing
            </h4>
            <p className="text-[#999999] pb-5">
              Lörem ipsum polysam spetila pyde. Trapolig regnbågsbarn och beligt
              ehylig viktigt
            </p>
            <a href="">
              <img src="../images/yellow arrow.png" alt="" />
            </a>
          </div>
          <div className=" content_writing w-[250px] h-64 p-5 border-2 shadow-md  rounded-xl border-[#5252FF]">
            <img src="../images/purple file.png" alt="" />
            <h4 className="text-[#5252FF] font-bold pt-5 pb-3">
              Content Writing
            </h4>
            <p className="text-[#999999] pb-5">
              Lörem ipsum polysam spetila pyde. Trapolig regnbågsbarn och beligt
              ehylig viktigt
            </p>
            <a href="">
              <img src="../images/purple arrow.png" alt="" />
            </a>
          </div>
          <div className=" ebook_services w-[250px] h-64 p-5 border-2  shadow-md  rounded-xl border-[#E72AFF]">
            <img src="../images/pink file.png" alt="" />
            <h4 className="text-[#E72AFF] font-bold pt-5 pb-3">
              Ebook Writing
            </h4>
            <p className="text-[#999999] pb-5">
              Lörem ipsum polysam spetila pyde. Trapolig regnbågsbarn och beligt
              ehylig viktigt
            </p>
            <a href="">
              <img src="../images/pink arrow.png" alt="" />
            </a>
          </div>
        </section> */}
        <section className="services services flex gap-[57px] justify-center flex-wrap mx-auto items-center max-w-[1032px] ">
          {services.map((item) => (
            <div
              key={item.id}
              className={`w-[250px] h-64 pt-4 pb-[29.65px] px-[26.9px] shadow-md border-2 rounded-xl ${'border-'.concat(
                item.border
              )}`}
            >
              <img src={item.image} alt="" />
              <div
                className={`font-bold pt-5 pb-3 ${'text-'.concat(item.border)}`}
              >
                <h4>{item.title}</h4>
              </div>
              <div className="text-[#999999] pb-5">
                <p>{item.description}</p>
              </div>
              <div className="arrow_link">
                <a href="">
                  <img src={item.arrow} alt="" />
                </a>
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}
