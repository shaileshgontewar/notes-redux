import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import * as yup from "yup";
import { green } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import { useSelector, useDispatch } from "react-redux";
import { ADD_NOTE } from "../redux/features/Action";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const note = useSelector((state) => state.notes);

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleFormSubmit = (values) => {
    let id = note.length ? note[note.length - 1].id + 1 : 1;
    let newNote = {
      id: id,
      title: values.title,
      content: values.content,
    };
    dispatch({ type: ADD_NOTE, payload: newNote });
    navigate("/list");
  };
  const checkoutSchema = yup.object().shape({
    title: yup.string().required("required"),
    content: yup.string().required("required"),
  });
  const initialValues = {
    title: "",
    content: "",
  };
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid
        sx={{
          boxShadow: 3,
          p: 4,
          backgroundColor: "#fff",
          m: 4,
          borderRadius: 3,
          maxWidth: 400,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#ff7043" }}>
          <AddReactionIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ADD NOTE
        </Typography>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box mt="20px">
                <TextField
                  margin="normal"
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Title"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.title}
                  name="title"
                  error={!!touched.title && !!errors.title}
                  helperText={touched.title && errors.title}
                />

                <TextField
                  margin="normal"
                  multiline
                  rows={4}
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Content"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.content}
                  name="content"
                  error={!!touched.content && !!errors.content}
                  helperText={touched.content && errors.content}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button
                  type="submit"
                  sx={{
                    bgcolor: green[700],
                    "&:hover": {
                      bgcolor: "green",
                    },
                  }}
                  variant="contained"
                >
                  ADD
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Grid>
    </Box>
  );
};

export default Form;
