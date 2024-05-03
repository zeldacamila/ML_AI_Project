import CircularProgress from '@mui/material/CircularProgress';
import "./_loading.scss";

export const Loading = () => {
  
    return (
        <div className="loading">
            <CircularProgress/>
            <h1>Loading</h1>
        </div>
    );

}
