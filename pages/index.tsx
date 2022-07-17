import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { AcilirKapanir } from "../component/AcilirKapanir";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col justify-between bg-custom flex-wrap w-full">
        <Head>
          <meta name="viewport" content="width=device-width" />
          <meta charSet="utf-8" />
          <title>ElderPenguins: The official ElderPenguins PFP</title>
          <meta
            name="description"
            content="They&#x27;re a collection of 10,000 utility-enabled PFPs that feature a richly diverse and unique pool of rarity-powered traits. What&#x27;s more, each Moonbird unlocks private club membership and additional benefits the longer you hold them. We call it nesting because, obviously."
          />
          <link rel="icon" href="favicon.ico"></link>
        </Head>

        <div className="h-screen w-full flex items-center justify-center flex-wrap mb-32">
          <div className="flex-grow flex justify-center items-center flex-nowrap mx-20 w-full text-custom text-mint">
            ELDERPENGUINS
          </div>

          <div className="bg-[#191433] mx-auto flex rounded-2xl overflow-hidden w-full md:max-w-[744px]">
            <div className="flex-1 p-10 flex flex-col items-center">
              <div className="w-36 h-36 mt-6 mb-10">
                <img
                  src="/hero-1.png"
                  alt="Hero Image"
                  width={144}
                  height={144}
                />
              </div>
              <p className="font-bold mb-8 text-white">Find a ElderPenguin</p>
              <a
                className="btn mb-3"
                href="https://opensea.io/collection/proof-moonbirds"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-6 h-6 mr-1.5">
                  <img src="/opensea.png" alt="" width={48} height={48} />
                </div>
                Soon on OpenSea
              </a>
              <a
                className="btn"
                href="https://looksrare.org/collections/0x23581767a106ae21c074b2276D25e5C3e136a68b"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-6 h-6 mr-1.5">
                  <img src="/looksrare.png" alt="" width={48} height={48} />
                </div>
                Soon on MagicEden
              </a>
            </div>
          </div>
        </div>

        <div className="px-10 space-y-[32px] max-w-[1128px] m-auto lg:flex flex-row md:space-x-[50px] flex justify-between items-center flex-wrap md:flex-nowrap">
          <div className="m-auto w-full">
            <img
              src="/penguen-grid.png"
              alt="Penguen Grid"
              width={500}
              height={500}
            />
          </div>
          <div className="space-y-[24px] flex flex-col justify-center w-full">
            <h2 className="text-title text-mint font-daydream text-custom text-mint">
              ElderPenguins are more than just an avatar
            </h2>
            <p className="text-md text-white text-center">
              They are a collection of 99 utility-enabled PFPs that feature
              unlimited utilities to the owners. What’s more, each Penguin
              unlocks private club membership and additional benefits the longer
              you hold them. These systems are integrated with staking. We call
              this hibernation, you know why.
            </p>
          </div>
        </div>

        <div className="mt-64 mb-12 md:mb-64 px-10 space-y-[32px] max-w-[1128px] m-auto lg:flex flex-row md:space-x-[50px] flex justify-between items-center flex-wrap md:flex-nowrap">
          <div className="space-y-[24px] flex flex-col justify-center w-full">
            <h2 className="text-title text-mint font-daydream text-custom text-mint">
              A collection built with utility &#38; community at the foundation
            </h2>
            <p className="text-md text-white text-center">
              We are no strangers to building utility in mind. That’s why every
              Penguin is also your key to our private Discord - where you will
              have admittance to our gated Parliament channels. Including Blue
              Chip alpha &#38; channel access that are owned by the community.
              <br /> <br />
              Once inside, you will have exclusive access to Blue Chip-related
              drops and access to upcoming Penguin projects; including the
              Penguin metaverse, named Gloobo.
            </p>
          </div>

          <div className="m-auto w-full">
            <img
              src="/penguen-index.png"
              alt="Penguen Grid"
              width={500}
              height={400}
            />
          </div>
        </div>

        <div className="pb-[20px] md:pb-[100px] pt-[100px] flex items-center justify-center">
          <div className="px-10 max-w-[785px]">
            <img src="/picture.png" alt="Highrise" width={468} height={204} />
            <div className="space-y-[23px] flex flex-col justify-center mt-10 text-center text-white">
              <h2 className="text-custom text-mint">Gloobo</h2>
              <p>
                Actually penguins don&#39;t hibernate. <br /> But we are waiting
                for the necessary weather conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[200px] pb-[160px] px-[24px] bg-[#1b354a]">
        <div className="max-w-[936px] m-auto space-y-[64px]">
          <p className="text-center uppercase font-[700] text-white">
            Built Right from the beginning
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-[32px]">
            <div className="flex flex-col items-center space-y-[12px] md:space-y-[24px] text-center text-white">
              <img
                src="/pixies.png"
                alt="You own the IP"
                width={76}
                height={85}
              />
              <p>You own the IP</p>
            </div>
            <div className="flex flex-col items-center space-y-[12px] md:space-y-[24px] text-center text-white">
              <img
                src="/Solana.png"
                alt="Minted on ETH, but carbon offset"
                width={134}
                height={85}
              />
              <p>Minted on SOL and carbon offset</p>
            </div>
            <div className="flex flex-col items-center space-y-[12px] md:space-y-[24px] text-center text-white">
              <img
                src="/Cube.png"
                alt="IPFS-hosted (on-chain coming)"
                width={110}
                height={85}
              />
              <p>IPFS-hosted</p>
            </div>
            <div className="flex flex-col items-center space-y-[12px] md:space-y-[24px] text-center text-white">
              <img
                src="/Medal.png"
                alt="Utility NFT that unlocks while held"
                width={81}
                height={85}
              />
              <p>Utility NFT that unlocks while held</p>
            </div>
            <div className="flex flex-col items-center space-y-[12px] md:space-y-[24px] text-center col-span-2 md:col-span-1 text-white">
              <img
                src="/key.png"
                alt="Access to the PROOF metaverse"
                width={96}
                height={85}
              />
              <p>Access to the Penguin metaverse</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#191433] flex justify-center items-start flex-wrap space-y-[24px] pt-32">
        <div className="w-10/12 md:w-[665px]">
          <div className="w-full text-custom-2 mb-12">
            Frequently Asked <br /> Questions
          </div>

          <div className="divide-y divide-purple-border mb-6">
            <AcilirKapanir
              title={"Is there a guaranteed mint allowlist?"}
              desc={
                <>
                  Yes, but most of the Penguin channels are NFT-gated (you must
                  hold a ElderPenguin to enter) inside the Penguin Discord. Once
                  inside, you will have access to private Penguin channels that
                  will include information on hibernating, community events,
                  upcoming drops, and more.
                </>
              }
            />
            <AcilirKapanir
              title={"What are the maximum mints per wallet?"}
              desc={<>One mint per wallet is allowed per allowlist.</>}
            />
            <AcilirKapanir
              title={
                "What intellectual property rights do ElderPenguins holders receive?"
              }
              desc={
                <>
                  Owners of ElderPenguins have full commercial art rights for
                  the Penguin they own.
                </>
              }
            />
            <AcilirKapanir
              title={"Is there a future roadmap?"}
              desc={
                <>
                  With the huge roadmap that we will gradually reveal, we are
                  planning to offer you quality advantages that have never been
                  offered in the Solana network until now. Follow our Twitter
                  news regularly so you don&#39;t miss new announcements.
                </>
              }
            />
          </div>
        </div>

        <div className="w-full">
          <div className="w-full md:w-[896px] px-10 max-w-4xl mx-auto pb-10">
            <fieldset className="text-center border-t border-purple-dark">
              <legend className="p-1.5">
                <img src="/globe.svg" alt="" width={24} height={24} />
              </legend>
            </fieldset>

            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col items-start space-y-[8px]">
                <img src="/logo-footer.png" alt="" width={200} height={44} />
                <span className="text-sm text-gray-500 font-[500] text-purple-dark">
                  © 2022 Penguin Holdings
                </span>
              </div>
              <div className="flex items-center mt-[24px] md:mt-0">
                <span className="text-sm text-gray-500 font-[500] text-purple-dark mr-4 hover:underline">
                  Follow along for updates:
                </span>

                <a
                  href="https://twitter.com/ElderPenguins"
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  <img
                    src="/twitter.svg"
                    alt="Twitter"
                    width={28}
                    height={22}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
