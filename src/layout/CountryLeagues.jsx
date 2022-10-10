import React from 'react'
import HeadingText from "../components/HeadingText"
import LeagueCard from '../components/LeagueCard'
import {leagueData} from "../data/leagueData"
export default function CountryLeagues() {
  return (
    <div class="countryleagues">
    <HeadingText text="Country Leagues" />
    <div class="countryleagues__components">
     
    {leagueData.map((data, key)=> <LeagueCard data={data} key={key} />)}


    </div>
  </div>
    )
}

