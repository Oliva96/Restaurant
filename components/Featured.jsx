import Image from "next/image";
import styles from '../styles/Featured.module.css';


const Featured = () => {
    const images = [
        '/images/featured.png',
        '/images/featured2.png',
        '/images/featured3.png',
    ];
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left: 0}}>
                <Image src='/images/arrowl.png' alt='' layout="fill" />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                    {images.map((img, i) => (
                        <Image src='/images/pizza.png' alt='' key={i} layout="fill" />
                    ))}
                </div>
            </div>
            <div className={styles.arrowContainer} style={{right: 0}}>
                <Image src='/images/arrowr.png' alt='' layout="fill"  />
            </div>
        </div>
    )
}

export default Featured
