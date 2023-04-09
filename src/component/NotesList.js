import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import { REMOVE_NOTE } from "../redux/features/Action";
import Stack from "@mui/material/Stack";
// import BackspaceIcon from "@mui/icons-material/Backspace";
// import EditIcon from "@mui/icons-material/Edit";
import { FiEdit, FiDelete } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
}));

const NotesList = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  return (
    <Box sx={{ flexGrow: 1 }} maxWidth={800} mx="auto" mt={5}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {notes.length <= 0 ? (
          <Grid item xs={3} sm={4} md={6} m="auto">
            <Item>
              <Stack
                direction={{ xs: "row", sm: "row" }}
                justifyContent="space-between"
                spacing={{ xs: 0 }}
              >
                <Box sx={{ p: 2 }}>
                  <Typography gutterBottom variant="h5">
                    Empty Notes List 🕵️‍♂️
                  </Typography>
                </Box>
              </Stack>
            </Item>
          </Grid>
        ) : (
          notes.map((note) => (
            <Grid item xs={3} sm={4} md={6} key={note.id} m="auto">
              <Item>
                <Stack
                  direction={{ xs: "row", sm: "row" }}
                  justifyContent="space-between"
                  spacing={{ xs: 0 }}
                >
                  <Box sx={{ p: 2 }}>
                    <Typography gutterBottom variant="h5">
                      {note.title}
                    </Typography>
                  </Box>
                  <Box>
                    <NavLink to={`/edit/${note.id}`}>
                      <IconButton
                        aria-label="delete"
                        size="small"
                        color="success"
                      >
                        <FiEdit />
                      </IconButton>
                    </NavLink>
                    <IconButton
                      aria-label="delete"
                      size="small"
                      color="error"
                      onClick={() =>
                        dispatch({
                          type: REMOVE_NOTE,
                          payload: { id: note.id },
                        })
                      }
                    >
                      <FiDelete />
                    </IconButton>
                  </Box>
                </Stack>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ p: 2 }}
                >
                  {note.content}
                </Typography>
              </Item>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};
export default NotesList;
