import { ValoTeam } from "@/lib/teams";
import { influs } from "@/lib/teams";
import Image from "next/image";
import React from "react";

type Props = {};

const ValorantTeam = (props: Props) => {
  return (
    <div>
      <div className="flex items-center justify-center w-full gap-5">
        <Image
          className="w-[100px] h-[30px]"
          src={"/arrowright.png"}
          alt="arrow left"
          width={100}
          height={100}
        />
        <h2 className="md:text-6xl text-1xl text-white font-semibold">
          Valorant TEAM
        </h2>
        <Image
          className="w-[100px] h-[30px]"
          src={"/arrowleft.png"}
          alt="arrow left"
          width={100}
          height={100}
        />
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 mt-10 gap-10">
        {ValoTeam.map((team: any) => (
          <div
            className="container grid items-center justify-center"
            key={team.name}>
            <Image src={team.img} alt={team.alt} width={250} height={300} />
            <div className="bg-black/10 grid mt-5 w-[250px] pl-2">
              <span className="text-white font-bold text-2xl">{team.name}</span>
              <span className="text-white font-thin text-md">
                ROLE : {team.followers}
              </span>
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <div className="flex items-center justify-center w-full gap-5">
        <Image
          className="w-[100px] h-[30px]"
          src={"/arrowright.png"}
          alt="arrow left"
          width={100}
          height={100}
        />
        <h2 className="md:text-6xl text-1xl text-white font-semibold">
          Our Influencers
        </h2>
        <Image
          className="w-[100px] h-[30px]"
          src={"/arrowleft.png"}
          alt="arrow left"
          width={100}
          height={100}
        />
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 mt-10 gap-10">
        {influs.map((team: any) => (
          <div
            className="container grid items-center justify-center"
            key={team.name}>
            <Image src={team.img} alt={team.alt} width={250} height={300} />
            <div className="bg-black/10 grid mt-5 w-[250px] pl-2">
              <span className="text-white font-bold text-2xl">{team.name}</span>
              <span className="text-white font-thin text-md">
                Followers : {team.followers}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValorantTeam;