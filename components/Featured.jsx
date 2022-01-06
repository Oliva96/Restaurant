import Image from "next/image";
import styles from '../styles/Featured.module.css';


const Featured = () => {
    const images = [
        '/images/featured.png',
        '/images/featured2.png',
        '/images/featured3.png',
    ];
    return (
        <div className="container">
            <div className={styles.arrowContainer}>
                <Image src='/images/arrowl.png' alt='' width='400px' height='400px' />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                    {images.map((img, i) => {
                        <Image src='/images/bake.png' alt='' key={i}  layout='fill' />
                    })}
                </div>
            </div>
            <div className={styles.arrowContainer}>
                <Image src='/images/arrowr.png' alt='' width='400px' height='400px'  />
            </div>
        </div>
    )
}

export default Featured
