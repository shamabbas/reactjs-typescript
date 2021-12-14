import React, { useState, useEffect } from "react";
import axios from "axios";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { IHomeUser } from "../../interfaces/pages/Home";
import { API } from "../../constants";
import { RootState } from "../../interfaces/redux/store";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";

const Home = () => {
  const [allUsers, setAllUsers] = useState<IHomeUser[]>([]);
  const classes = useStyles();
  const token = useSelector<RootState>((state) => state?.auth?.token);
  const profile_Id = useSelector<RootState>((state) => state?.auth?.user_id);
  const getUsersProfiles = async () => {
    try {
      const { data } = await axios.get(`${API}getprofiles`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setAllUsers(data);

      // console.log(auth);
    } catch (error) {}
  };

  const getQR = async () => {
    try {
      const res = await axios.post(
        `${API}addqrdata`,
        {
          data: "qr dataa gdgdgdg",
          profile_Id: profile_Id,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // console.log(auth);
    } catch (error) {}
  };

  useEffect(() => {
    getUsersProfiles();
  }, []);
  console.log(allUsers);
  return (
    <>
      <div className={classes.root}>
        <Button onClick={() => getQR()}> Send Qr </Button>
        <ul>
          {allUsers.map((user) => (
            <li key={user._id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "40vw",
                }}
              >
                <Typography>Name:</Typography>
                <Typography>{user?.name}</Typography>
                <Typography>Email:</Typography>
                <Typography>{user?.email}</Typography>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
      width: "60vw",
    },
  })
);

export { Home };
