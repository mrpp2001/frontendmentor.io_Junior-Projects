const ctx = document.getElementById("myChart");

// Fetch data from data.json
fetch("data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    // Extract the 'amount' values from the JSON data
    const data = jsonData.map((item) => item.amount);
    const label = jsonData.map((item) => item.day);

    // Find the index of the highest value in the data array
    const indexOfMaxValue = data.indexOf(Math.max(...data));

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: label,
        datasets: [
          {
            label: "$",
            data: data,
            borderWidth: 1,
            backgroundColor: data.map((value, index) =>
              index === indexOfMaxValue ? "#75B6BC" : "#eb755d"
            ),
            borderRadius: 5, // Set borderRadius for all four corners
          },
        ],
      },
      options: {
        scales: {
          x: {
            display: true, // Hide the x-axis line
            grid: {
              display: false, // Hide the x-axis grid lines
            },
          },
          y: {
            display: false, // Hide the y-axis
          },
        },
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
        },
      },
    });
  })
  .catch((error) => {
    console.error("Error fetching data from data.json:", error);
  });

