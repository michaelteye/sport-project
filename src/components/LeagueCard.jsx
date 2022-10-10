import React from 'react'

export default function LeagueCard({data}) {
  return (
    <div className="countryleagues__components--card">
    <img
      src={data.image}
      alt="Europa League"
      className="countryleagues__components--card--photo"
    />
    <div className="countryleagues__components--card--description">
     {data.title}
    </div>
  </div>
  )
}