import Color from 'color-thief-react';

const ColorThiefcomp = () => {
    return (
        <div>
            <img src="http://ekladata.com/kRyR4CJUacmCnlEc-_pILyWpo0s@390x318.jpg" alt="pikachu" />
            <Color src={"https://www.bedetheque.com/media/Couvertures/Bleu00_25102003.jpg"}>
                {({ data }) => (
                    <div style={{ color: data }}>
                        Text with the predominant color
                    </div>
                )}
            </Color>
        </div>
    );
}

export default ColorThiefcomp;