import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


const Day = (day) => {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [time, setTime] = React.useState('');
    const [place, setPlace] = React.useState('');
    const [explanation, setExplanation] = React.useState('');
    const [plan, setPlan] = React.useState('');
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        setOpen(false);
        if(title === '' && time ==='' && place==='' && explanation === ''){
            setPlan('');
            return;
        }
        if(title === ''){
            setPlan('予定あり');
        }else {
            setPlan(title);
        }
    };
    const disp = (() => {
        if (day.day.getDate() === 1) {
            return (day.day.getMonth() + 1) + '月' + (day.day.getDate()) + '日';
        } else {
            return day.day.getDate();
        }
    })();
    return (
        <React.Fragment>
            <div variant="outlined" color="primary" onClick={handleClickOpen}>
                {disp}
            </div>
            <div>
                {plan}
            </div>
            <div>
                {time}
            </div>
            <Dialog open={open} onClose={handleClose} >
                <DialogContent>
                    <DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="title"
                            label="タイトル"
                            type="text"
                            fullWidth
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </DialogContentText>

                    <TextField
                        margin="dense"
                        id="time"
                        label=""
                        type="time"
                        fullWidth
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="place"
                        label="場所"
                        type="text"
                        fullWidth
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="explanation"
                        label="説明"
                        type="text"
                        fullWidth
                        value={explanation}
                        onChange={(e) => setExplanation(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        キャンセル
            </Button>
                    <Button onClick={handleSubmit} color="primary">
                        登録
            </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )

}

export default Day;