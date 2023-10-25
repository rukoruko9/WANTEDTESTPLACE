import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useState } from "react";
import {SearchData,messageque,messageData} from '../components/MainProgram';



export default function Home() {

  
  var nowmessage = 0;
  if(Object.keys(messageque).length != 0)var [messagetext, setText] = useState((messageque[0][nowmessage+1][0] + ":  " + messageque[0][nowmessage+1][1]));
  else var [messagetext, setText] = useState("現在進行中の会話はありません"); 
 function textanimation(Text) {
  var wordtoreturn  =  "";  
  for(var i = 0; i<Text.length; i++){
        wordtoreturn += Text[i];
        setTimeout(textshows(wordtoreturn),1000);
    }
}
  function textshows(wordreturn){
    setText(wordreturn);
  }
  
  function nextmessage() {
    if(Object.keys(messageque).length == 0){
      return;
    }
    nowmessage++;
    if(nowmessage == (Object.keys(messageque[0]).length)-1){
      nowmessage = 0;
      messageque.shift();
    }
  if(Object.keys(messageque).length == 0){
    setText("現在進行中の会話はありません");
  }
  else {
    textanimation(messageque[0][nowmessage+1][0] + ":  " + messageque[0][nowmessage+1][1])
  }
}

    return (
      <>
      <div className={styles.container}>
        <div className={styles.buttons}>

          <div className={styles.empty}></div>
          
          <div className={styles.btnbox}>
            <Link href="/Information" className={styles.selectedbtn}>
              <div class={styles.btnname}>　情報　</div>
              <div class={styles.btncolor}></div>
            </Link>
          </div>

          <div className={styles.btnbox}>
            <Link href="/Serch" className={styles.btn}>
              <div class={styles.btnname}>　検索　</div>
              <div class={styles.btncolor}></div>
            </Link>
          </div>
          <div className={styles.btnbox}>
            <Link href="/Relations" className={styles.btn}>
              <div class={styles.btnname}>　関係図　</div>
              <div class={styles.btncolor}></div>
            </Link>
          </div>
          <div className={styles.btnbox}>
            <Link href="/Missions" className={styles.btn}>
              <div class={styles.btnname}>　ミッション　</div>
              <div class={styles.btncolor}></div>
            </Link>
          </div>
          <div className={styles.btnbox}>
            <Link href="/PastInformation" className={styles.btn}>
              <div class={styles.btnname}>　過去の情報　</div>
              <div class={styles.btncolor}></div>
            </Link>
          </div>
        </div>

        <div className={styles.main} onClick = {nextmessage}>
            <div className={styles.infoemp0}></div>
            <div className={styles.infoemp1}></div>

            <div className={styles.messagebox}>
              <p className = {styles.messagetext}>{messagetext}</p>
            </div>

            <div className={styles.infoemp1}></div>
            <div className={styles.infoemp2}></div>

          </div>
         
              
      </div>
      </>
    );
  }