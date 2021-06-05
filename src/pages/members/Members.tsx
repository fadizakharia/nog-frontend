import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { Pagination, Skeleton } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { string } from "yup/lib/locale";
import { getUsers } from "../../api/users";
import Member from "./Member";
import QueryAppBar from "./QueryAppBar";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    GridWrapper: {
      padding: "80px 10px",
    },
  })
);
export default function Members() {
  const classes = useStyles();
  const [users, setUsers] = useState<
    Array<{
      characterName: string;
      bio: string;
      profilePictureURI: string;
      verified: boolean;
      createdAt: Date;
      updatedAt: Date;
    }>
  >();
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setNbOfPages] = useState<number>();
  const [total, setTotal] = useState<number>();
  async function loadUsers(limit = 5, page = 0) {
    try {
      setLoading(true);
      const foundUsers = await getUsers(limit, page);
      setUsers(foundUsers.data.users);
      setTotal(foundUsers.data.length);
      setNbOfPages(foundUsers.data.pages);
      setLoading(false);
      console.log(foundUsers);
    } catch (err) {
      console.log(err);

      setUsers([]);
      setLoading(false);
    }
  }
  useEffect(() => {
    setLoading(true);
    loadUsers();

    return () => {};
  }, []);

  let counterArray = new Array<number>(10).fill(1, 0, page);
  let counter = 0;
  const loadedUsers = (
    <Grid className={classes.GridWrapper} container justify="center">
      <Grid container spacing={3} style={{ maxWidth: "98vw" }}>
        {!loading ? (
          users && users.length > 0 ? (
            <React.Fragment>
              {users.map((user) => {
                return (
                  <Member
                    key={new Date(user.createdAt).toTimeString()}
                    characterName={user.characterName}
                    joined={new Date(user.createdAt)}
                    verified={user.verified}
                    bio={user.bio}
                    imageUrl={
                      user.profilePictureURI
                        ? "http://localhost:4000/" + user.profilePictureURI
                        : undefined
                    }
                  />
                );
              })}
            </React.Fragment>
          ) : (
            <Typography>No Users Found</Typography>
          )
        ) : (
          counterArray.map((i) => {
            counter += i;
            return (
              <Grid item key={"skele" + counter} xs={6} sm={6} md={3}>
                <Skeleton variant="rect" height="300px" animation="wave" />
              </Grid>
            );
          })
        )}
      </Grid>
    </Grid>
  );
  // return <QueryAppBar />; to be added when elastic search is integrated.
  return (
    <React.Fragment>
      {loadedUsers}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <Pagination
          onChange={(event, value) => loadUsers(5, value - 1)}
          color="secondary"
          count={page}
          variant="outlined"
        />
      </div>
    </React.Fragment>
  );
}
