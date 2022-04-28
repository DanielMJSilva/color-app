import React from 'react';
import styles from "./styles/MiniPaletteStyles"
import { withStyles } from "@material-ui/styles";

function MiniPalette(props) {
    const { classes, paletteName, emoji, colors } = props;
    const minoColorBoxes = colors.map(color => (
        <div 
            className={classes.miniColor} 
            style={ {backgroundColor: color.color }} 
            key={color.name}
        />
    ))
    return (
        <div className={classes.root} onClick={props.handleCLick}>
            <div className={classes.colors}>
                {minoColorBoxes}
            </div>
            <h5 className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </h5>

        </div>
    );

}

export default withStyles(styles)(MiniPalette);
