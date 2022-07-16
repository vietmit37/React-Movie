import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    Container,
  } from "@mui/material";
  import React, { useCallback, useEffect, useState } from "react";
  import { QuanLyPhimService } from "../../services";
  import { Link } from "react-router-dom";
  
  const Home = () => {
    const [films, setFilms] = useState([]);
  
    const getFilm = useCallback(async () => {
      const res = await QuanLyPhimService.getFilms("GP01");
      setFilms(res);
    }, []);
  
    useEffect(() => {
      getFilm();
    }, [getFilm]);
    return (
      <div className="">
        <h2>List</h2>
        <Container sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {films &&
            films.map((film, index) => (
              <Card sx={{ width: 200 }} key={index}>
                <CardMedia
                  component="img"
                  height="180"
                  image={film?.hinhAnh}
                  alt={"phim"}
                />
                <CardContent sx={{ minHeight: "100px" }}>
                  <Typography>{film?.tenPhim}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <Link to={`/detail/${film?.maPhim}`}>CHI TIET</Link>
                  </Button>
                </CardActions>
              </Card>
            ))}
        </Container>
      </div>
    );
  };
  
  export default Home;
  