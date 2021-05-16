import React from "react";
import { Chart } from "react-google-charts";

const AttendanceGraph = () => {
  return (
    <div style={{ display: "flex", maxWidth: "100%", objectFit: "scale-down" }}>
      <Chart
        width={"100%"}
        height={350}
        chartType="Calendar"
        loader={<div>Loading Chart</div>}
        data={[
          [
            { type: "date", id: "Date" },
            { type: "number", id: "Won/Loss" },
          ],
          [new Date(2020, 3, 13), 14],
          [new Date(2020, 3, 14), 10],
          [new Date(2020, 3, 15), 2],
          [new Date(2020, 3, 16), 11],
          [new Date(2020, 3, 17), 10],
          [new Date(2021, 1, 4), 9],
          [new Date(2021, 1, 5), 5],
          [new Date(2021, 1, 12), 12],
          [new Date(2021, 1, 13), 11],
          [new Date(2021, 1, 19), 14],
          [new Date(2021, 1, 23), 6],
          [new Date(2021, 1, 24), 10],
          [new Date(2021, 2, 10), 11],
        ]}
        options={{}}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default AttendanceGraph;
