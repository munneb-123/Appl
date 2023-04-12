import { useEffect, useState } from 'react';
import { Box, Typography } from "@mui/material";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "./Style.css";

ChartJs.register(Tooltip, Title, ArcElement, Legend);


const data = {
  datasets: [{
    data: [10, 20, 30],
    backgroundColor: [
      'red',
      'blue',
      'yellow'
    ]
  },
  ],
  labels: [
    'Red',
    'Yellow',
    'Blue'
  ],
};


const Home = () => {

  const [data, setData] = useState({
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: [
        'red',
        'blue',
        'yellow'
      ]
    },
    ],
    labels: [
      'Red',
      'Yellow',
      'Blue'
    ],
  });

  useEffect(() => {
    const fetchData = () => {
      fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
        const res = data.json();
        return res
      }).then((res) => {
        console.log("resss", res)
        const label = [];
        const data = [];
        for (var i of res) {
          label.push(i.name);
          data.push(i.id)
        }
        setData(
          {
            datasets: [{
              data: data,
              backgroundColor: [
                'red',
                'blue',
                'yellow'
              ]
            },
            ],
            labels: label,
          }
        )

      }).catch(e => {
        console.log("error", e)
      })
    }
    fetchData();
  }, [])

  return (
    <Box>
      <Typography variant="h5" fontWeight={600} sx={{ textAlign: 'center', my: 4 }}>Dynamic chart (3rd party Api)</Typography>
      <Box className="box" sx={{ maxHeight: "70vh", p: 2, display: "flex", justifyContent: 'center' }}>
        <Doughnut data={data} />
      </Box>
    </Box>
  );
};

export default Home;




