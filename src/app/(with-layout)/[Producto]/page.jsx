'use client'


import Image from 'next/image'
import Link from 'next/link'
import style from '../Cliente/Cliente.module.css'
import Input from '../../../components/Input'
import Select from '../../../components/Select'
import Button from '../../../components/Button'

import Tag from '../../../components/Tag'
import { useRouter } from 'next/navigation';

import { useMask } from '@react-input/mask';


export default function Home() {
    const inputRefCard = useMask({ mask: '____ ____ ____ ____', replacement: { _: /\d/ } });

    const inputRefDate = useMask({ mask: '__/__', replacement: { _: /\d/ } });
    const inputRefCVC = useMask({ mask: '___', replacement: { _: /\d/ } });
    const router = useRouter()


    function seeMore() {
        router.push('/Producto')
    }


    return (


        <main className={style.main}>

            <div className={style.tagBox}>
                <label htmlFor="">Categoria</label>
                <Tag styled='tagPrimary'>Los mas recientes</Tag>

            </div>



            <div className={style.card}>
                <p>
                    <span>Cartera</span><span>Bs 100</span>
                </p>
                <img src="/cartera.svg" alt="" />
                <div>
                    <Button styled='miniButtonSecondaryGreen' click={seeMore}>Ver +</Button>
                    <Button styled='miniButtonSecondary' click={seeMore}>Comprar</Button>

                </div>
                <span>Nombre de la empresa</span>
            </div>


            <h3>Cartera</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Adipiscing in nunc fermentum lacus est lacus integer. </p>
            <Select arr={['Model One', 'Model Two']}></Select>

            <div className={style.cantidadBox}>
                <h3>Cantidad</h3>

                <Button styled='miniButtonSecondaryGreen' click={seeMore}>+</Button>
                <Button styled='miniButtonSecondary' click={seeMore}>-</Button>

            </div>

            <Button styled='buttonSecondary' click={seeMore}>Comprar</Button>

        </main>


    )
}