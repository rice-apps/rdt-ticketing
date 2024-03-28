import React from 'react'
import { SeatsioSeatingChart, SeatsioEventManager, Pricing } from "@seatsio/seatsio-react";

const SeatingChart = () => {
    const SECRET_WORKSPACE_KEY = "6e446b5d-c0d9-48d4-b7ce-53045869b4d1"
    const PUBLIC_WORKSPACE_KEY = "ab92e245-48bb-4d3d-856a-90b1fc8adadd"
    const EVENT_DAY_1_KEY = "ef47e713-1139-4e0b-bcbc-97de1331b06d"

    const pricing = [
        { category: 'Floor', price: 5 },
    ]

  return (
    <div style={{"height": "500px"}}>
          < SeatsioSeatingChart
              workspaceKey="ab92e245-48bb-4d3d-856a-90b1fc8adadd"
              event="ef47e713-1139-4e0b-bcbc-97de1331b06d"
              region="na"
            //   colorScheme="dark"
          />

          {/* <SeatsioEventManager
              secretKey="6e446b5d-c0d9-48d4-b7ce-53045869b4d1"
              event="ef47e713-1139-4e0b-bcbc-97de1331b06d"
              region="eu"
          /> */}

    </div>
  )
}

export default SeatingChart