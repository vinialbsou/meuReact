import React, {useState} from 'react';
import {Button, Container, Link, TextField, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {useDispatch} from 'react-redux';
import {userSignIn} from "../reducers/users";
import {setAuthToken} from "../reducers/userToken";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '8',
    },
    form: {
        width: '100%',
        marginTop: '1',
    },
    submit: {
        margin: '3 0 2',
        backgroundColor: '#007bff',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#025980',
        },
    },
});

const Login = () => {

    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const handleSubmit = (values) => {

        dispatch({
            type: userSignIn,
            payload: {
                email: `${email}`,
                password: `${password}`,
            }
        })

        //console.log(`Email: ${email}, Password: ${password}`, 'valores:' ,values);
    };

    return (
        <Container component="main" maxWidth="xs">
            <br/>
            <div className={classes.root}>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                    >
                        Entrar
                    </Button>
                    <Typography>
                        Não tem uma conta?{' '}
                        <Link href="/singup" variant="body2">
                            Cadastre-se
                        </Link>
                    </Typography>
                </form>
            </div>
        </Container>
    );
};

export default Login;
