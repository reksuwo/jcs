import React from "react";
import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Sample Data for the Bar Chart
const chartData = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 30 },
  { name: "Mar", value: 50 },
  { name: "Apr", value: 40 },
  { name: "May", value: 60 },
  { name: "Jun", value: 70 },
];

// Sample Data for Doughnut Chart
const doughnutData1 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
];

// Colors for the doughnut slices
const COLORS = ["#16404d", "#F6C667"];

// Reusable Doughnut Chart Component
const DoughnutChart = ({ data, title }) => (
  <Box w="100%" h="100%">
    {/* Doughnut Chart */}
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data} // `data` is passed as a prop
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={60}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    {/* Styled Title */}
    <Text
      fontSize="14px"
      fontFamily="'Poppins', sans-serif"
      fontWeight="bold"
      textAlign="center"
      color="#16404d"
      mt={2}
      lineHeight="1"
    >
      {title}
    </Text>
  </Box>
);

// Dashboard Component
const Dashboard = () => (
  <Box
    bg="transparent" // Background color for the entire dashboard
    w="100%"
    p={4} // Padding around the content
    borderRadius="md" // Rounded corners for the box
    h="100%"
    mt={2}
  >
    {/* Content Area */}
    <Grid templateColumns="repeat(2, 1fr)" gap={5}>
      {/* First GridItem with Bar Chart */}
      <GridItem
        w="100%"
        h="350px"
        bg="white"
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      >
        <VStack spacing={2} align="stretch" h="100%">
          {/* Title */}
          <Text
            fontSize="20px"
            fontFamily="'Poppins', sans-serif"
            fontWeight="bold"
            textAlign="left"
            mt={2}
            ml={5}
            mb={5}
          >
            YOUR SALES REPORT
          </Text>
          {/* Bar Chart */}
          <Box flex="1" h="100%">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  tick={{
                    fontSize: 14,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                />
                <YAxis
                  domain={[0, 100]}
                  tickCount={11}
                  tick={{
                    fontSize: 14,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                />
                <Tooltip
                  contentStyle={{
                    fontSize: "14px",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                />
                <Legend
                  wrapperStyle={{
                    fontSize: "14px",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                />
                <Bar dataKey="value" fill="#16404d" barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </VStack>
      </GridItem>

      {/* Second GridItem with 1 Doughnut Chart */}
      <GridItem
        w="43vh"
        h="350px"
        bg="white"
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      >
        <VStack spacing={4} align="center" h="100%">
          <Text
            fontSize="20px"
            fontFamily="'Poppins', sans-serif"
            fontWeight="bold"
            mt={3}
            textAlign="left"
          >
            FUEL AS OF
          </Text>
          {/* Single Doughnut Chart */}
          <DoughnutChart data={doughnutData1} title="Total Remaining Fuel" />
        </VStack>
      </GridItem>

      {/* Third GridItem */}
      <GridItem
        w="100%"
        h="270px"
        bg="white"
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
        mt={-2}
      >
        <Text
          fontSize="20px"
          fontFamily="'Poppins', sans-serif"
          fontWeight="bold"
          textAlign="center"
          mt="10px"
        >
          GRID 3 CONTENT
        </Text>
      </GridItem>

      {/* Fourth GridItem */}
      <GridItem
        w="100%"
        h="270px"
        bg="white"
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
        position="relative" // Enable positioning context
      >
        <Text
          fontSize="20px"
          fontFamily="'Poppins', sans-serif"
          fontWeight="bold"
          textAlign="center"
          position="absolute" // Position the text absolutely
          left="50%" // Center horizontally
          transform="translateX(-50%)" // Adjust for exact centering
          mb="10px" // Add some margin from the bottom
        >
          GRID 4 CONTENT
        </Text>
      </GridItem>
    </Grid>
  </Box>
);

export default Dashboard;
