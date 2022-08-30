import React from "react";

const Team: React.FC = () => {
  return (
    <div id="team">
      <div className="h-full justify-center px-4 md:px-0 pt-12 pb-6 team-section">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4 lg:text-5xl lg:mb-8">
            Team
          </h2>
        </div>
        <div className="flex justify-center px-[10%] 2xl:px-[15%] pt-8 text-sm flex-wrap">
          {/* 1 */}
          <div className="flex flex-col items-center justify-start sm:mr-2 lg:mr-8 py-4 max-w-[450px]">
            <img
              src={require("../assets/team/joshua_final.png")}
              alt="joshua_picture"
              className="h-28 w-28"
            />
            <div className="pt-4 text-center">
              <div className="text-center pb-4">
                <div className="font-bold text-lg">Joshua Esan</div>
                <div className="text-lg">Managing Partner</div>
              </div>
              Joshua Esan is an experienced media consultant. He has worked with
              CryptodailyUK and Ergo Foundation as a journalist and senior
              technical writer. He has also been featured on Cointelegraph and
              BeIncrypto as an opinion contributor. He's passionate about
              bringing Web3 and DeFi to a wider audience.
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-col items-center justify-start sm:mr-2 lg:mr-8 py-4 max-w-[450px]">
            <img
              src={require("../assets/team/tobi_final.png")}
              alt="tobi_picture"
              className="h-28 w-28"
            />
            <div className="pt-4 text-center">
              <div className="text-center pb-4">
                <div className="font-bold text-lg">Oluwatobi Joel</div>
                <div className="text-lg">Managing Partner</div>
              </div>
              Oluwatobi Joel is an experienced PR professional. He has been
              featured on Cointelegraph, Disruption banking, Inside Bitcoins,
              CryptodailyUK, and Coinchapter. He has worked with more than ten
              crypto companies.
            </div>
          </div>
          {/* 3 */}
          <div className="flex flex-col items-center justify-start sm:mr-2 lg:mr-8 py-4 max-w-[450px]">
            <img
              src={require("../assets/team/tolani_final.png")}
              alt="tolani_picture"
              className="h-28 w-28"
            />
            <div className="pt-4 text-center">
              <div className="text-center pb-4">
                <div className="font-bold text-lg">Motolani Victor</div>
                <div className="text-lg">Creative Director</div>
              </div>
              Motolani Victor is a copywriter and long term investor. He
              currently works with Trust Wallet and AirNFTs as a technical
              writer. He's passionate about chess, writing, and
              cryptocurrencies.
            </div>
          </div>
          {/* 4 */}
          <div className="flex flex-col items-center justify-start sm:mr-2 lg:mr-8 py-4 max-w-[450px]">
            <img
              src={require("../assets/team/demilade_final.png")}
              alt="demilade_picture"
              className="h-28 w-28"
            />
            <div className="pt-4 text-center">
              <div className="text-center pb-4">
                <div className="font-bold text-lg">Oluwademilade Afolabi</div>
                <div className="text-lg">Account Strategist</div>
              </div>
              Oluwademilade Afolabi is a crypto marketing expert. He currently
              works as a contributing writer at Cryptoknowmics and has written
              several opinion editorials for popular crypto media sites
            </div>
          </div>
          {/* 5 */}
          <div className="flex flex-col items-center justify-start sm:mr-2 lg:mr-8 py-4 max-w-[450px]">
            <img
              src={require("../assets/team/ike_final.png")}
              alt="ike_picture"
              className="h-28 w-28"
            />
            <div className="pt-4 text-center">
              <div className="text-center pb-4">
                <div className="font-bold text-lg">IK Ebengho</div>
                <div className="text-lg">Managing Editor</div>
              </div>
              IK Ebengho is an experienced writer and founder of Pendical. He
              has contributed to KAMPAY, SuperOgranics, and other crypto media
              outlets. He is passionate about DeFi and its applicability to the
              financial sector.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
