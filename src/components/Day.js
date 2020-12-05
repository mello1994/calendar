import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


const Day = (day) => {
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                        />
                    </DialogContentText>

                    <TextField
                        margin="dense"
                        id="time"
                        label=""
                        type="date"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="place"
                        label="場所"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="explanation"
                        label="説明"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        キャンセル
            </Button>
                    <Button onClick={handleClose} color="primary">
                        登録
            </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )

}

export default Day;