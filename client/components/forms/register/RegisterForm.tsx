import React from 'react';
import {useFormik} from 'formik';
import registerFormValidationSchema from "./registerFormValidationSchema";
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";
import useStyles from '../style';

const RegisterForm = ({onSubmit, loading}) => {
    const classes = useStyles();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: '',
            username: '',
            avatar: '',
            password: '',
            passwordConfirmation: '',
        },
        validationSchema: registerFormValidationSchema,
        onSubmit,
    });

    return (
        <form
            onSubmit={formik.handleSubmit}
            className={classes.root}
        >
            <TextField
                required
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                fullWidth
                id="username"
                name="username"
                label="User name"
                value={formik.values.username}
                onChange={formik.handleChange}
            />
            <TextField
                fullWidth
                id="avatar"
                name="avatar"
                label="Avatar"
                value={formik.values.avatar}
                onChange={formik.handleChange}
            />
            <TextField
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
                required
                fullWidth
                id="passwordConfirmation"
                name="passwordConfirmation"
                label="Password confirmation"
                type="password"
                value={formik.values.passwordConfirmation}
                onChange={formik.handleChange}
                error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
                helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
            />
            <Button
                className={classes.button}
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                disabled={loading}
            >
                Submit
            </Button>
        </form>
    );
};

export default RegisterForm;
