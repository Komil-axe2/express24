import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import { Box, Grid, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import App from "../../components/Cards/cards";
import Layout from "../../components/layout/layout";

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.express24.uz/client/v5/catalog/stores?latitude=41.311191&longitude=69.279776&limit=20&rootCategoryId=2"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRestaurants(data.list);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Layout>
      <App />
      <Box sx={{ flexGrow: 1, margin: "auto", maxWidth: "lg" }}>
        <h1>Restorantlar</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
          >
            Tanlanganlar
          </button>
          <button
            style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
          >
            Aksiya
          </button>
          <button
            style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
          >
            Tanlanganlar
          </button>
          <button
            style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
          >
            Fast Food
          </button>
          <button
            style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
          >
            Pizza
          </button>
          <button
            style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
          >
            Burger
          </button>
          <button
            style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
          >
            Tanlanganlar
          </button>
          <button
            style={{ width: "10%", height: "5vh", borderRadius: "10px", border: "none", backgroundColor: "#f5f5dc" }}
          >
            Yana
          </button>
        </div>

        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 12 }} spacing={0} marginTop={2}>
          {restaurants.map((restaurant, index) => (
            <Grid item xs={4} sm={6} md={4} key={index}>
              <Box marginBottom={4}>
                <Box
                  width={359}
                  height={"280px"}
                  bgcolor={"#fff"}
                  borderRadius={"20px"}
                  boxShadow={4}
                  overflow="hidden"
                  display="flex"
                  flexDirection="column"
                >
                  <img style={{ width: "100%", height: "20vh" }} src={restaurant.cover} alt={restaurant.name} />
                  <div style={{ padding: "10px", flexGrow: 1 }}>
                    <h2>{restaurant.name}</h2>

                    <NavLink to={`/restaurant/${restaurant.id}`}>More</NavLink>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
                    <IconButton aria-label="rating" style={{ color: "yellow" }}>
                      <StarIcon />
                    </IconButton>
                    <div
                      style={{
                        width: "40%",
                        height: "5vh",
                        backgroundColor: "#00FF40",
                        borderRadius: "40px",
                        textAlign: "center", // Updated textAlign
                        color: "white",
                        fontSize: "20px",
                        paddingTop: "6px",
                      }}
                    >
                      {restaurant.id}
                    </div>

                    <IconButton aria-label="like" style={{ color: "red" }}>
                      <FavoriteIcon />
                    </IconButton>
                  </div>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export default Restaurant;
