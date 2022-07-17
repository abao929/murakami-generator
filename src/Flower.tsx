interface FlowerProps {
  randomize?: string
  colors?: FlowerColors
  scale?: number
  rotate?: number
  placement?: Position
}

export default function Flower({
  randomize,
  colors,
  scale,
  rotate,
  placement,
}: FlowerProps) {
  const randFromDistribution = (tensDistribution: number[]) => {
    if (tensDistribution.length < 10) {
      console.log('invalid distribution')
      return 0
    }
    const tensDigit = tensDistribution[Math.floor(Math.random() * 10)]
    return Math.floor((Math.random() + tensDigit) * 10)
  }

  const randHSL = () => {
    const lightnessDistribution = [4, 4, 5, 5, 5, 5, 5, 5, 6, 6]
    const saturationDistribution = [4, 5, 6, 7, 8, 9, 9, 9, 9, 9]
    const h: number = randHue()
    const s: number = randFromDistribution(saturationDistribution)
    const l: number = randFromDistribution(lightnessDistribution)
    return `hsl(${h}, ${s}%, ${l}%)`
  }

  // if (oddPetals) {
  //   petal1 = petal3 = petal5 = petal7 = petal9 = petal11 = oddPetals
  // }
  // if (evenPetals) {
  //   petal0 = petal2 = petal4 = petal6 = petal8 = petal10 = evenPetals
  // }
  if (randomize) {
  }
  const randHue = () => {
    return Math.floor(Math.random() * 360)
  }
  console.log(randHSL())
  return <div>hey</div>
  // return (
  //   <div>
  //     <svg
  //       width={`${100 * (scale ?? 1)}`}
  //       height={`${100 * (scale ?? 1)}`}
  //       viewBox="0 0 100 100"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M56.4694 3.35277C58.925 5.71666 60.6722 8.0111 59.0444 14.1528L55.4028 27.7861C53.7472 27.3805 52.0556 27.1639 50.3528 27.1417C50.3472 27.1417 50.3444 27.1417 50.3389 27.1417C50.225 27.1389 50.1111 27.1389 49.9972 27.1389C49.8861 27.1389 49.775 27.1389 49.6639 27.1417C49.6556 27.1417 49.6472 27.1417 49.6389 27.1417C47.9389 27.1667 46.2472 27.3805 44.5944 27.7861L40.9528 14.1555C39.325 8.0111 41.075 5.71666 43.5278 3.35277C45.1472 1.79721 47.3833 0.972214 50 0.972214C52.6139 0.972214 54.85 1.79721 56.4694 3.35277"
  //         fill={colors.petal0 ?? '#EE32A2'}
  //       />
  //       <path
  //         d="M78.925 12.8389C79.8694 16.1111 80.2361 18.9722 75.7556 23.4778L65.7861 33.4639C63.8056 31.5695 61.4944 30.0472 58.9444 28.9695C58.8778 28.9389 58.8111 28.9111 58.7444 28.8833C58.6778 28.8583 58.6139 28.8306 58.5472 28.8028C57.85 28.5195 57.1417 28.2722 56.425 28.0611L60.0889 14.4333C61.75 8.30001 64.4111 7.18612 67.7194 6.36668C69.9 5.82779 72.2472 6.23335 74.5139 7.54168C76.7778 8.85001 78.3028 10.6806 78.925 12.8389Z"
  //         fill={petal1 ?? '#F0413A'}
  //       />
  //       <path
  //         d="M92.4583 25.4861C93.7639 27.75 94.1722 30.1 93.6305 32.2806C92.8139 35.5861 91.7 38.25 85.5667 39.9111L71.9361 43.5722C71.725 42.8583 71.4805 42.15 71.1972 41.4528C71.1694 41.3861 71.1417 41.3195 71.1139 41.2528C71.0861 41.1861 71.0611 41.1222 71.0305 41.0556C69.9528 38.5056 68.4305 36.1945 66.5361 34.2139L76.5194 24.2445C81.0278 19.7611 83.8889 20.1278 87.1611 21.075C89.3194 21.6972 91.15 23.2222 92.4583 25.4861Z"
  //         fill={petal2 ?? '#F57E31'}
  //       />
  //       <path
  //         d="M96.6472 43.5306C98.2028 45.1472 99.025 47.3861 99.025 50C99.025 52.6139 98.2028 54.8528 96.6472 56.4694C94.2833 58.925 91.9889 60.675 85.8472 59.0472L72.2139 55.4028C72.6167 53.75 72.8333 52.0611 72.8583 50.3583C72.8583 50.35 72.8583 50.3444 72.8583 50.3389C72.8611 50.225 72.8611 50.1139 72.8611 50C72.8611 49.8889 72.8611 49.775 72.8583 49.6639C72.8583 49.6556 72.8583 49.65 72.8583 49.6444C72.8333 47.9417 72.6167 46.25 72.2139 44.5972L85.8444 40.9555C91.9889 39.3278 94.2833 41.075 96.6472 43.5306"
  //         fill={petal3 ?? '#FAB835'}
  //       />
  //       <path
  //         d="M93.6305 67.7194C94.1722 69.9 93.7639 72.25 92.4583 74.5139C91.15 76.7778 89.3194 78.3056 87.1611 78.9277C83.8889 79.8722 81.0278 80.2389 76.5194 75.7584L66.5361 65.7861C68.4305 63.8056 69.9528 61.4972 71.0305 58.9444C71.0611 58.8806 71.0861 58.8139 71.1139 58.7472C71.1417 58.6806 71.1694 58.6139 71.1972 58.5472C71.4805 57.85 71.725 57.1444 71.9361 56.4278L85.5667 60.0889C91.7 61.7528 92.8139 64.4139 93.6305 67.7194"
  //         fill={petal4 ?? '#F6F238'}
  //       />
  //       <path
  //         d="M75.7556 76.5223C80.2361 81.0278 79.8694 83.8889 78.925 87.1638C78.3028 89.3194 76.7778 91.1528 74.5139 92.4583C72.2472 93.7667 69.9 94.1722 67.7194 93.6334C64.4111 92.8139 61.75 91.7 60.0889 85.5666L56.425 71.9389C57.0972 71.7389 57.7611 71.5083 58.4167 71.2472C58.4972 71.2167 58.575 71.1861 58.6556 71.1528C58.7056 71.1333 58.7556 71.1139 58.8028 71.0917C59.0472 70.9917 59.2889 70.8861 59.5278 70.7778C59.7333 70.6833 59.9389 70.5889 60.1417 70.4889C60.1444 70.4861 60.1472 70.4833 60.15 70.4833C62.2278 69.4583 64.1222 68.1306 65.7861 66.5361L75.7556 76.5223"
  //         fill={petal5 ?? '#98D54B'}
  //       />
  //       <path
  //         d="M59.0444 85.8472C60.6722 91.9916 58.925 94.2861 56.4694 96.6472C54.85 98.2055 52.6139 99.0278 50 99.0278C47.3833 99.0278 45.1472 98.2055 43.5278 96.6472C41.075 94.2861 39.325 91.9916 40.9528 85.8472L44.5944 72.2139C46.1861 72.6027 47.8083 72.8166 49.4444 72.8556C49.5917 72.8583 49.7389 72.8611 49.8861 72.8611C49.9 72.8611 49.9167 72.8639 49.9306 72.8639C49.9417 72.8639 49.95 72.8639 49.9611 72.8639C49.975 72.8639 49.9861 72.8639 50 72.8639C50.0111 72.8639 50.025 72.8639 50.0361 72.8639C50.0611 72.8639 50.0861 72.8611 50.1111 72.8611C50.2583 72.8611 50.4083 72.8583 50.5556 72.8556C52.1917 72.8166 53.8139 72.6027 55.4028 72.2139L59.0444 85.8472"
  //         fill={petal6 ?? '#38B561'}
  //       />
  //       <path
  //         d="M43.5722 71.9389L39.9111 85.5666C38.2472 91.7 35.5861 92.8139 32.2778 93.6334C30.1 94.1722 27.75 93.7667 25.4861 92.4583C23.2222 91.1528 21.6944 89.3194 21.0723 87.1638C20.1278 83.8889 19.7611 81.0278 24.2416 76.5223L34.2111 66.5361C36.2278 68.4667 38.5861 70.0083 41.1917 71.0917C41.2417 71.1111 41.2944 71.1333 41.3444 71.1556C41.4222 71.1861 41.4972 71.2167 41.575 71.2444C42.2333 71.5083 42.8972 71.7389 43.5722 71.9389Z"
  //         fill={petal7 ?? '#41BBAA'}
  //       />
  //       <path
  //         d="M33.4639 65.7861L23.4777 75.7584C18.9722 80.2389 16.1083 79.8722 12.8362 78.9277C10.6806 78.3056 8.84722 76.7778 7.54167 74.5139C6.23328 72.25 5.82781 69.9 6.36664 67.7194C7.18608 64.4139 8.29719 61.7528 14.4334 60.0889L28.0667 56.425C28.0667 56.425 28.0667 56.425 28.0667 56.4278C28.0972 56.5333 28.1306 56.6389 28.1639 56.7472C28.1806 56.8056 28.2 56.8667 28.2194 56.925C28.2583 57.05 28.3 57.1722 28.3417 57.2972C28.3528 57.3361 28.3667 57.3722 28.3806 57.4111C28.4306 57.5556 28.4806 57.7 28.5333 57.8417C28.5361 57.8556 28.5417 57.8694 28.5472 57.8806C28.9917 59.0889 29.5444 60.275 30.2083 61.4278C31.1306 63.025 32.225 64.4833 33.4639 65.7861"
  //         fill={petal8 ?? '#57BBEC'}
  //       />
  //       <path
  //         d="M27.7917 44.6C27.7667 44.7083 27.7389 44.8167 27.7139 44.9278C27.7028 44.9833 27.6889 45.0417 27.6777 45.0972C27.6473 45.2278 27.6195 45.3611 27.5944 45.4917C27.5862 45.5278 27.5805 45.5639 27.5723 45.6C27.5417 45.7528 27.5139 45.9056 27.4861 46.0611C27.4861 46.0694 27.4833 46.0778 27.4833 46.0889C27.2611 47.3583 27.1473 48.6667 27.1473 50C27.1473 51.3361 27.2611 52.6417 27.4833 53.9139C27.4833 53.9222 27.4861 53.9306 27.4861 53.9389C27.5139 54.0944 27.5445 54.25 27.5723 54.4028C27.5805 54.4389 27.5862 54.4722 27.5944 54.5083C27.6195 54.6417 27.65 54.7722 27.6777 54.9056C27.6889 54.9611 27.7028 55.0167 27.7139 55.0722C27.7389 55.1833 27.7667 55.2917 27.7917 55.4028L14.1528 59.0472C8.00837 60.675 5.71387 58.925 3.35276 56.4694C1.7945 54.8528 0.972229 52.6139 0.972229 50C0.972229 47.3861 1.7945 45.1472 3.35276 43.5306C5.71387 41.075 8.00837 39.3278 14.1528 40.9555L27.7917 44.6Z"
  //         fill={petal9 ?? '#3F84CC'}
  //       />
  //       <path
  //         d="M23.4777 24.2444L33.4639 34.2139C32.4972 35.2306 31.6194 36.3444 30.8417 37.5417C30.8333 37.5528 30.825 37.5639 30.8194 37.575C30.7333 37.7083 30.65 37.8417 30.5667 37.975C30.5472 38.0083 30.525 38.0417 30.5056 38.075C30.4194 38.2139 30.3361 38.3556 30.2528 38.5C30.2389 38.525 30.2222 38.55 30.2083 38.575C29.5417 39.7278 28.9889 40.9139 28.5444 42.125C28.5417 42.1361 28.5361 42.1472 28.5333 42.1583C28.4806 42.3028 28.4278 42.4472 28.3778 42.5917C28.3667 42.6306 28.3528 42.6667 28.3417 42.7028C28.3 42.8278 28.2583 42.9528 28.2194 43.0806C28.2 43.1361 28.1806 43.1944 28.1639 43.2528C28.1306 43.3611 28.0972 43.4667 28.0667 43.575L14.4334 39.9111C8.2972 38.25 7.18608 35.5861 6.36664 32.2806C5.82781 30.1 6.23328 27.75 7.54167 25.4861C8.84722 23.2222 10.6806 21.6972 12.8362 21.075C16.1111 20.1278 18.9722 19.7611 23.4777 24.2444Z"
  //         fill={petal10 ?? '#4D45A4'}
  //       />
  //       <path
  //         d="M39.9083 14.4333L43.5722 28.0611C42.8556 28.2722 42.15 28.5195 41.4528 28.8028C41.3861 28.8306 41.3194 28.8583 41.2528 28.8861C41.1861 28.9139 41.1194 28.9389 41.0528 28.9667C38.5028 30.0472 36.1917 31.5695 34.2111 33.4639L24.2416 23.4806C19.7611 18.9722 20.1278 16.1111 21.0723 12.8389C21.6944 10.6806 23.2222 8.85001 25.4861 7.54168C27.75 6.23335 30.1 5.82779 32.2778 6.36668C35.5861 7.18612 38.2472 8.30001 39.9083 14.4333Z"
  //         fill={petal11 ?? '#9F3EA4'}
  //       />
  //       <path
  //         d="M43.1944 39.7917C44.0556 38.3667 43.9778 36.7417 43.0194 36.1611C42.0611 35.5806 40.5861 36.2667 39.7222 37.6889C38.8611 39.1139 38.9389 40.7389 39.9 41.3194C40.8583 41.9 42.3333 41.2139 43.1944 39.7917ZM59.7361 41.3194C60.6944 40.7389 60.7722 39.1139 59.9111 37.6889C59.05 36.2667 57.575 35.5806 56.6167 36.1611C55.6556 36.7417 55.5778 38.3667 56.4389 39.7917C57.3028 41.2139 58.7778 41.9 59.7361 41.3194ZM66.3611 47.6694L66.4194 47.2972L66.0722 47.1472C66.0028 47.1167 59.0611 44.1889 49.8167 44.1889C40.5694 44.1889 33.6278 47.1167 33.5583 47.1472L33.2111 47.2972L33.2694 47.6694C34.6056 56.2556 41.5722 65.45 49.8167 65.45C58.0583 65.45 65.025 56.2556 66.3611 47.6694ZM71.6361 46.7361C71.7944 47.8 71.8806 48.8917 71.8806 50C71.8806 51.1111 71.7944 52.2 71.6361 53.2667C71.6278 53.3056 71.6222 53.3472 71.6167 53.3889C71.6 53.4917 71.5833 53.5944 71.5667 53.6972C71.5472 53.8028 71.5278 53.9111 71.5083 54.0194C71.5 54.0556 71.4944 54.0944 71.4861 54.1306C71.3861 54.6444 71.2694 55.1556 71.1333 55.6639C71.0417 56.0111 70.9389 56.3528 70.8306 56.6944C70.825 56.7111 70.8194 56.7278 70.8139 56.7444C70.7722 56.8778 70.7278 57.0111 70.6806 57.1417C70.6528 57.2278 70.6222 57.3139 70.5917 57.4C70.5694 57.4556 70.55 57.5139 70.5278 57.5722C68.3139 63.5556 63.5556 68.3167 57.5694 70.5306C57.5111 70.55 57.4556 70.5722 57.3972 70.5917C57.3111 70.6222 57.2278 70.6528 57.1417 70.6833C57.0083 70.7278 56.8778 70.7722 56.7444 70.8167C56.725 70.8222 56.7083 70.8278 56.6917 70.8333C56.525 70.8861 56.3583 70.9361 56.1889 70.9861C56.0139 71.0389 55.8389 71.0889 55.6611 71.1361C55.1528 71.2722 54.6389 71.3889 54.125 71.4889C54.0917 71.4944 54.0556 71.5028 54.0222 71.5083C53.9111 71.5306 53.8 71.55 53.6889 71.5667C53.5917 71.5833 53.4917 71.6 53.3944 71.6167C53.3472 71.625 53.3028 71.6306 53.2583 71.6389C52.1944 71.7972 51.1056 71.8806 50 71.8806C49.6222 71.8806 49.2472 71.8722 48.875 71.8528C48.1556 71.8167 47.4444 71.7417 46.7417 71.6389C46.6972 71.6306 46.65 71.625 46.6028 71.6167C46.5056 71.6 46.4083 71.5833 46.3111 71.5694C46.2 71.55 46.0861 71.5306 45.975 71.5083C45.9417 71.5028 45.9083 71.4944 45.875 71.4889C45.3611 71.3889 44.8472 71.2722 44.3361 71.1361C43.9889 71.0417 43.6472 70.9417 43.3056 70.8333C43.2889 70.8278 43.2722 70.8222 43.2528 70.8139C43.1222 70.7722 42.9889 70.7278 42.8583 70.6833C42.7722 70.6528 42.6861 70.6222 42.6 70.5917C42.5417 70.5722 42.4861 70.55 42.4306 70.5306C37.6167 68.75 33.5972 65.325 31.0556 60.9389C29.1444 57.6167 28.1306 53.8333 28.125 50C28.125 49.4611 28.1472 48.9222 28.1861 48.3861C28.4333 45.1139 29.4111 41.9194 31.0556 39.0639C32.925 35.8361 35.5972 33.1278 38.7972 31.2139C38.9083 31.1472 39.0222 31.0778 39.1361 31.0139C39.1972 30.9806 39.2583 30.9444 39.3167 30.9111C39.4583 30.8333 39.5972 30.7583 39.7389 30.6833C39.7889 30.6583 39.8361 30.6306 39.8861 30.6056C40.0694 30.5083 40.2556 30.4167 40.4444 30.325C40.4917 30.3028 40.5389 30.2806 40.5861 30.2583C40.7306 30.1889 40.8778 30.1222 41.025 30.0556C41.0889 30.0278 41.1528 30 41.2167 29.9722C41.3639 29.9056 41.5139 29.8444 41.6639 29.7806C41.7111 29.7611 41.7583 29.7417 41.8056 29.7222C42 29.6444 42.1917 29.5694 42.3889 29.4972C42.4389 29.4778 42.4917 29.4611 42.5417 29.4417C42.6917 29.3889 42.8417 29.3361 42.9944 29.2833C43.0583 29.2611 43.1222 29.2417 43.1889 29.2194C43.3472 29.1667 43.5028 29.1194 43.6611 29.0694C43.7083 29.0556 43.7528 29.0417 43.7972 29.0278C43.9972 28.9694 44.1972 28.9139 44.4 28.8611C44.4528 28.8472 44.5083 28.8333 44.5639 28.8194C44.7167 28.7778 44.8694 28.7417 45.025 28.7056C45.0889 28.6889 45.1556 28.675 45.2222 28.6611C45.3889 28.6222 45.5556 28.5861 45.725 28.5528C45.7639 28.5444 45.8056 28.5361 45.8444 28.5278C46.05 28.4889 46.2556 28.4528 46.4611 28.4194C46.5194 28.4083 46.5778 28.4 46.6361 28.3917C46.7917 28.3667 46.9472 28.3444 47.1028 28.3222C47.1694 28.3139 47.2333 28.3056 47.3 28.2972C47.4778 28.275 47.6556 28.2556 47.8306 28.2361C47.8667 28.2333 47.9 28.2306 47.9333 28.225C48.1444 28.2056 48.3528 28.1889 48.5611 28.175C48.6222 28.1722 48.6806 28.1694 48.7417 28.1639C48.8972 28.1556 49.0556 28.1472 49.2111 28.1417C49.2778 28.1389 49.3444 28.1361 49.4111 28.1361C49.5972 28.1306 49.7833 28.125 49.9694 28.125C49.9806 28.125 49.9917 28.125 50 28.125C50.0028 28.125 50.0083 28.125 50.0111 28.125C50.2056 28.125 50.4 28.1306 50.5944 28.1361C50.6556 28.1361 50.7167 28.1389 50.7778 28.1417C50.9417 28.1472 51.1056 28.1556 51.2667 28.1639C51.3222 28.1694 51.3778 28.1722 51.4306 28.175C51.6444 28.1889 51.8556 28.2056 52.0694 28.2278C52.0944 28.2278 52.1194 28.2333 52.1444 28.2333C52.3306 28.2528 52.5194 28.275 52.7056 28.2972C52.7667 28.3056 52.825 28.3139 52.8833 28.3222C53.05 28.3444 53.2139 28.3667 53.3806 28.3944C53.4306 28.4028 53.4778 28.4083 53.5278 28.4167C53.7389 28.4528 53.95 28.4889 54.1611 28.5306C54.1889 28.5361 54.2139 28.5417 54.2417 28.5472C54.425 28.5833 54.6083 28.6222 54.7889 28.6639C54.8444 28.675 54.9028 28.6889 54.9583 28.7028C55.125 28.7417 55.2944 28.7833 55.4611 28.825C55.5028 28.8361 55.5444 28.8472 55.5889 28.8583C55.7972 28.9139 56.0056 28.9722 56.2111 29.0333C56.2389 29.0417 56.2667 29.05 56.2972 29.0583C56.475 29.1111 56.65 29.1667 56.8278 29.225C56.8806 29.2417 56.9333 29.2611 56.9861 29.2778C57.1556 29.3333 57.3222 29.3944 57.4917 29.4556C57.5278 29.4667 57.5611 29.4806 57.5972 29.4917C57.8 29.5667 58.0028 29.6472 58.2056 29.7278C58.2361 29.7389 58.2639 29.7528 58.2944 29.7639C58.4639 29.8333 58.6333 29.9056 58.8028 29.9806C58.8528 30.0028 58.9028 30.025 58.95 30.0444C59.1194 30.1222 59.2889 30.2 59.4556 30.2778C59.4833 30.2917 59.5111 30.3056 59.5389 30.3194C59.7361 30.4139 59.9333 30.5111 60.1278 30.6139C60.1583 30.6306 60.1889 30.6472 60.2194 30.6611C60.3806 30.7472 60.5417 30.8333 60.7028 30.925C60.7472 30.95 60.7944 30.975 60.8417 31.0028C60.9833 31.0833 61.125 31.1667 61.2639 31.25C65.4917 33.8 68.7917 37.7389 70.5278 42.4306C70.55 42.4861 70.5694 42.5444 70.5917 42.6028C70.6222 42.6861 70.6528 42.7722 70.6806 42.8583C70.7278 42.9917 70.7722 43.1222 70.8139 43.2556C70.8194 43.2722 70.825 43.2917 70.8306 43.3083C70.9389 43.6472 71.0417 43.9917 71.1333 44.3389C71.2694 44.8472 71.3861 45.3583 71.4861 45.8694C71.4944 45.9056 71.5 45.9444 71.5083 45.9833C71.5278 46.0889 71.5472 46.1972 71.5667 46.3056C71.5833 46.4056 71.6 46.5083 71.6167 46.6111C71.6222 46.6528 71.6278 46.6944 71.6361 46.7361"
  //         fill={face ?? '#F5F015'}
  //       />
  //       <path
  //         d="M65.3361 47.9028C64.6278 51.9528 62.6639 56.0417 59.9111 59.175C56.9083 62.5945 53.3222 64.4778 49.8167 64.4778C46.3083 64.4778 42.7222 62.5945 39.7194 59.175C36.9667 56.0417 35.0028 51.9528 34.2944 47.9C35.7944 47.3222 41.9361 45.1611 49.8167 45.1611C57.6833 45.1611 63.8333 47.325 65.3361 47.9028"
  //         fill={mouth ?? '#ED1D25'}
  //       />
  //       <path
  //         d="M42.7361 36.3083C43.1694 36.4528 43.3444 37.1083 43.125 37.775C42.9056 38.4417 42.3778 38.8667 41.9417 38.7222C41.5083 38.5806 41.3333 37.925 41.5528 37.2583C41.7722 36.5917 42.3028 36.1667 42.7361 36.3083ZM43.1944 39.7917C44.0556 38.3667 43.9778 36.7417 43.0194 36.1611C42.0611 35.5806 40.5861 36.2667 39.7222 37.6889C38.8611 39.1139 38.9389 40.7389 39.9 41.3194C40.8583 41.9 42.3333 41.2139 43.1944 39.7917ZM42.2667 40.3389C42.4194 39.8778 42.2806 39.4195 41.9611 39.3139C41.6417 39.2111 41.2583 39.4972 41.1083 39.9583C40.9556 40.4195 41.0944 40.8778 41.4139 40.9833C41.7333 41.0889 42.1167 40.8 42.2667 40.3389Z"
  //         fill={leftEye ?? 'black'}
  //       />
  //       <path
  //         d="M57.6917 38.7222C58.125 38.5806 58.3 37.925 58.0806 37.2583C57.8611 36.5917 57.3333 36.1667 56.8972 36.3083C56.4639 36.4528 56.2889 37.1083 56.5083 37.775C56.7278 38.4417 57.2583 38.8667 57.6917 38.7222V38.7222ZM59.6806 40.9833C60 40.8778 60.1361 40.4194 59.9861 39.9583C59.8333 39.4972 59.4528 39.2111 59.1306 39.3139C58.8111 39.4195 58.675 39.8778 58.825 40.3389C58.9778 40.8 59.3611 41.0889 59.6806 40.9833ZM59.9111 37.6889C60.7722 39.1139 60.6945 40.7389 59.7361 41.3194C58.7778 41.9 57.3028 41.2139 56.4389 39.7917C55.5778 38.3667 55.6556 36.7417 56.6167 36.1611C57.575 35.5806 59.05 36.2667 59.9111 37.6889Z"
  //         fill={rightEye ?? 'black'}
  //       />
  //       {/* Mouth Outline */}
  //       <path
  //         d="M59.9111 59.175C62.6639 56.0417 64.6278 51.9528 65.3361 47.9028C63.8333 47.325 57.6833 45.1611 49.8167 45.1611C41.9361 45.1611 35.7944 47.3222 34.2944 47.9C35.0028 51.9528 36.9667 56.0417 39.7194 59.175C42.7222 62.5944 46.3083 64.4778 49.8167 64.4778C53.3222 64.4778 56.9083 62.5944 59.9111 59.175V59.175ZM66.4194 47.2972L66.3611 47.6694C65.025 56.2556 58.0583 65.45 49.8167 65.45C41.5722 65.45 34.6055 56.2556 33.2694 47.6694L33.2111 47.2972L33.5583 47.1472C33.6278 47.1167 40.5694 44.1889 49.8167 44.1889C59.0611 44.1889 66.0028 47.1167 66.0722 47.1472L66.4194 47.2972Z"
  //         fill="black"
  //       />
  //       {/* Face & Petals Outline */}
  //       <path
  //         d="M27.7139 44.9278C27.7389 44.8167 27.7667 44.7083 27.7917 44.6L14.1528 40.9556C8.00836 39.3278 5.71386 41.075 3.35275 43.5306C1.79449 45.1472 0.972222 47.3861 0.972222 50C0.972222 52.6139 1.79449 54.8528 3.35275 56.4694C5.71386 58.925 8.00836 60.675 14.1528 59.0472L27.7917 55.4028C27.7667 55.2917 27.7389 55.1833 27.7139 55.0722C27.7028 55.0167 27.6889 54.9611 27.6777 54.9056C27.6499 54.7722 27.6195 54.6417 27.5944 54.5083C27.5862 54.4722 27.5805 54.4389 27.5723 54.4028C27.5445 54.25 27.5139 54.0944 27.4861 53.9389C27.4861 53.9306 27.4833 53.9222 27.4833 53.9139C27.2611 52.6417 27.1473 51.3361 27.1473 50C27.1473 48.6667 27.2611 47.3583 27.4833 46.0889C27.4833 46.0778 27.4861 46.0694 27.4861 46.0611C27.5139 45.9056 27.5417 45.7528 27.5723 45.6C27.5805 45.5639 27.5862 45.5278 27.5944 45.4917C27.6195 45.3611 27.6473 45.2278 27.6777 45.0972C27.6889 45.0417 27.7028 44.9833 27.7139 44.9278V44.9278ZM23.4777 75.7584L33.4639 65.7861C32.225 64.4833 31.1306 63.025 30.2083 61.4278C29.5444 60.275 28.9917 59.0889 28.5472 57.8806C28.5417 57.8694 28.5361 57.8556 28.5333 57.8417C28.4806 57.7 28.4306 57.5556 28.3806 57.4111C28.3667 57.3722 28.3528 57.3361 28.3417 57.2972C28.3 57.1722 28.2583 57.05 28.2194 56.925C28.2 56.8667 28.1806 56.8056 28.1639 56.7472C28.1306 56.6389 28.0972 56.5333 28.0667 56.4278C28.0667 56.425 28.0667 56.425 28.0667 56.425L14.4334 60.0889C8.29719 61.7528 7.18608 64.4139 6.36664 67.7194C5.82781 69.9 6.23328 72.25 7.54167 74.5139C8.84722 76.7778 10.6806 78.3056 12.8362 78.9277C16.1083 79.8722 18.9722 80.2389 23.4777 75.7584ZM33.4639 34.2139L23.4777 24.2444C18.9722 19.7611 16.1111 20.1278 12.8362 21.075C10.6806 21.6972 8.84722 23.2222 7.54167 25.4861C6.23328 27.75 5.82781 30.1 6.36664 32.2806C7.18608 35.5861 8.29719 38.25 14.4334 39.9111L28.0667 43.575C28.0972 43.4667 28.1306 43.3611 28.1639 43.2528C28.1806 43.1944 28.2 43.1361 28.2194 43.0806C28.2583 42.9528 28.3 42.8278 28.3417 42.7028C28.3528 42.6667 28.3667 42.6306 28.3778 42.5917C28.4278 42.4472 28.4806 42.3028 28.5333 42.1583C28.5361 42.1472 28.5417 42.1361 28.5444 42.125C28.9889 40.9139 29.5417 39.7278 30.2083 38.575C30.2222 38.55 30.2389 38.525 30.2528 38.5C30.3361 38.3556 30.4194 38.2139 30.5056 38.075C30.525 38.0417 30.5472 38.0083 30.5667 37.975C30.65 37.8417 30.7333 37.7083 30.8194 37.575C30.825 37.5639 30.8333 37.5528 30.8417 37.5417C31.6194 36.3444 32.4972 35.2306 33.4639 34.2139V34.2139ZM39.9111 85.5666L43.5722 71.9389C42.8972 71.7389 42.2333 71.5083 41.575 71.2444C41.4972 71.2167 41.4222 71.1861 41.3444 71.1556C41.2944 71.1333 41.2417 71.1111 41.1917 71.0917C38.5861 70.0083 36.2278 68.4667 34.2111 66.5361L24.2416 76.5223C19.7611 81.0278 20.1278 83.8889 21.0723 87.1638C21.6944 89.3194 23.2222 91.1528 25.4861 92.4583C27.75 93.7667 30.1 94.1722 32.2778 93.6334C35.5861 92.8139 38.2472 91.7 39.9111 85.5666V85.5666ZM43.5722 28.0611L39.9083 14.4333C38.2472 8.3 35.5861 7.18611 32.2778 6.36666C30.1 5.82778 27.75 6.23333 25.4861 7.54167C23.2222 8.85 21.6944 10.6806 21.0723 12.8389C20.1278 16.1111 19.7611 18.9722 24.2416 23.4806L34.2111 33.4639C36.1917 31.5694 38.5028 30.0472 41.0528 28.9667C41.1194 28.9389 41.1861 28.9139 41.2528 28.8861C41.3194 28.8583 41.3861 28.8306 41.4528 28.8028C42.15 28.5194 42.8556 28.2722 43.5722 28.0611V28.0611ZM56.4694 96.6473C58.925 94.2861 60.6722 91.9916 59.0444 85.8472L55.4028 72.2139C53.8139 72.6028 52.1917 72.8166 50.5556 72.8556C50.4083 72.8583 50.2583 72.8611 50.1111 72.8611C50.0861 72.8611 50.0611 72.8639 50.0361 72.8639C50.025 72.8639 50.0111 72.8639 50 72.8639C49.9861 72.8639 49.975 72.8639 49.9611 72.8639C49.95 72.8639 49.9417 72.8639 49.9306 72.8639C49.9167 72.8639 49.9 72.8611 49.8861 72.8611C49.7389 72.8611 49.5917 72.8583 49.4444 72.8556C47.8083 72.8166 46.1861 72.6028 44.5944 72.2139L40.9528 85.8472C39.325 91.9916 41.075 94.2861 43.5278 96.6473C45.1472 98.2055 47.3833 99.0278 50 99.0278C52.6139 99.0278 54.85 98.2055 56.4694 96.6473ZM59.0444 14.1528C60.6722 8.01111 58.925 5.71666 56.4694 3.35278C54.85 1.79722 52.6139 0.972221 50 0.972221C47.3833 0.972221 45.1472 1.79722 43.5278 3.35278C41.075 5.71666 39.325 8.01111 40.9528 14.1556L44.5944 27.7861C46.2472 27.3806 47.9389 27.1667 49.6389 27.1417C49.6472 27.1417 49.6556 27.1417 49.6639 27.1417C49.775 27.1389 49.8861 27.1389 49.9972 27.1389C50.1111 27.1389 50.225 27.1389 50.3389 27.1417C50.3444 27.1417 50.3472 27.1417 50.3528 27.1417C52.0556 27.1639 53.7472 27.3806 55.4028 27.7861L59.0444 14.1528ZM71.8806 50C71.8806 48.8917 71.7944 47.8 71.6361 46.7361C71.6278 46.6944 71.6222 46.6528 71.6167 46.6111C71.6 46.5083 71.5833 46.4056 71.5667 46.3056C71.5472 46.1972 71.5278 46.0889 71.5083 45.9833C71.5 45.9444 71.4944 45.9056 71.4861 45.8694C71.3861 45.3583 71.2694 44.8472 71.1333 44.3389C71.0417 43.9917 70.9389 43.6472 70.8306 43.3083C70.825 43.2917 70.8194 43.2722 70.8139 43.2556C70.7722 43.1222 70.7278 42.9917 70.6806 42.8583C70.6528 42.7722 70.6222 42.6861 70.5917 42.6028C70.5694 42.5444 70.55 42.4861 70.5278 42.4306C68.7917 37.7389 65.4917 33.8 61.2639 31.25C61.125 31.1667 60.9833 31.0833 60.8417 31.0028C60.7944 30.975 60.7472 30.95 60.7028 30.925C60.5417 30.8333 60.3806 30.7472 60.2194 30.6611C60.1889 30.6472 60.1583 30.6306 60.1278 30.6139C59.9333 30.5111 59.7361 30.4139 59.5389 30.3194C59.5111 30.3056 59.4833 30.2917 59.4556 30.2778C59.2889 30.2 59.1194 30.1222 58.95 30.0444C58.9028 30.025 58.8528 30.0028 58.8028 29.9806C58.6333 29.9056 58.4639 29.8333 58.2944 29.7639C58.2639 29.7528 58.2361 29.7389 58.2056 29.7278C58.0028 29.6472 57.8 29.5667 57.5972 29.4917C57.5611 29.4806 57.5278 29.4667 57.4917 29.4556C57.3222 29.3944 57.1556 29.3333 56.9861 29.2778C56.9333 29.2611 56.8806 29.2417 56.8278 29.225C56.65 29.1667 56.475 29.1111 56.2972 29.0583C56.2667 29.05 56.2389 29.0417 56.2111 29.0333C56.0056 28.9722 55.7972 28.9139 55.5889 28.8583C55.5444 28.8472 55.5028 28.8361 55.4611 28.825C55.2944 28.7833 55.125 28.7417 54.9583 28.7028C54.9028 28.6889 54.8444 28.675 54.7889 28.6639C54.6083 28.6222 54.425 28.5833 54.2417 28.5472C54.2139 28.5417 54.1889 28.5361 54.1611 28.5306C53.95 28.4889 53.7389 28.4528 53.5278 28.4167C53.4778 28.4083 53.4306 28.4028 53.3806 28.3944C53.2139 28.3667 53.05 28.3444 52.8833 28.3222C52.825 28.3139 52.7667 28.3056 52.7056 28.2972C52.5194 28.275 52.3306 28.2528 52.1444 28.2333C52.1194 28.2333 52.0944 28.2278 52.0694 28.2278C51.8556 28.2056 51.6444 28.1889 51.4306 28.175C51.3778 28.1722 51.3222 28.1694 51.2667 28.1639C51.1056 28.1556 50.9417 28.1472 50.7778 28.1417C50.7167 28.1389 50.6556 28.1361 50.5944 28.1361C50.4 28.1306 50.2056 28.125 50.0111 28.125C50.0083 28.125 50.0028 28.125 50 28.125C49.9917 28.125 49.9806 28.125 49.9694 28.125C49.7833 28.125 49.5972 28.1306 49.4111 28.1361C49.3444 28.1361 49.2778 28.1389 49.2111 28.1417C49.0556 28.1472 48.8972 28.1556 48.7417 28.1639C48.6806 28.1694 48.6222 28.1722 48.5611 28.175C48.3528 28.1889 48.1444 28.2056 47.9333 28.225C47.9 28.2306 47.8667 28.2333 47.8306 28.2361C47.6556 28.2556 47.4778 28.275 47.3 28.2972C47.2333 28.3056 47.1694 28.3139 47.1028 28.3222C46.9472 28.3444 46.7917 28.3667 46.6361 28.3917C46.5778 28.4 46.5194 28.4083 46.4611 28.4194C46.2556 28.4528 46.05 28.4889 45.8444 28.5278C45.8056 28.5361 45.7639 28.5444 45.725 28.5528C45.5556 28.5861 45.3889 28.6222 45.2222 28.6611C45.1556 28.675 45.0889 28.6889 45.025 28.7056C44.8694 28.7417 44.7167 28.7778 44.5639 28.8194C44.5083 28.8333 44.4528 28.8472 44.4 28.8611C44.1972 28.9139 43.9972 28.9694 43.7972 29.0278C43.7528 29.0417 43.7083 29.0556 43.6611 29.0694C43.5028 29.1194 43.3472 29.1667 43.1889 29.2194C43.1222 29.2417 43.0583 29.2611 42.9944 29.2833C42.8417 29.3361 42.6917 29.3889 42.5417 29.4417C42.4917 29.4611 42.4389 29.4778 42.3889 29.4972C42.1917 29.5694 42 29.6444 41.8056 29.7222C41.7583 29.7417 41.7111 29.7611 41.6639 29.7806C41.5139 29.8444 41.3639 29.9056 41.2167 29.9722C41.1528 30 41.0889 30.0278 41.025 30.0556C40.8778 30.1222 40.7306 30.1889 40.5861 30.2583C40.5389 30.2806 40.4917 30.3028 40.4444 30.325C40.2556 30.4167 40.0694 30.5083 39.8861 30.6056C39.8361 30.6306 39.7889 30.6583 39.7389 30.6833C39.5972 30.7583 39.4583 30.8333 39.3167 30.9111C39.2583 30.9444 39.1972 30.9806 39.1361 31.0139C39.0222 31.0778 38.9083 31.1472 38.7972 31.2139C35.5972 33.1278 32.925 35.8361 31.0556 39.0639C29.4111 41.9194 28.4333 45.1139 28.1861 48.3861C28.1472 48.9222 28.125 49.4611 28.125 50C28.1306 53.8333 29.1444 57.6167 31.0556 60.9389C33.5972 65.325 37.6167 68.75 42.4306 70.5306C42.4861 70.55 42.5417 70.5722 42.6 70.5917C42.6861 70.6222 42.7722 70.6528 42.8583 70.6833C42.9889 70.7278 43.1222 70.7722 43.2528 70.8139C43.2722 70.8222 43.2889 70.8278 43.3056 70.8333C43.6472 70.9417 43.9889 71.0417 44.3361 71.1361C44.8472 71.2722 45.3611 71.3889 45.875 71.4889C45.9083 71.4944 45.9417 71.5028 45.975 71.5083C46.0861 71.5306 46.2 71.55 46.3111 71.5694C46.4083 71.5833 46.5056 71.6 46.6028 71.6167C46.65 71.625 46.6972 71.6306 46.7417 71.6389C47.4444 71.7417 48.1556 71.8167 48.875 71.8528C49.2472 71.8722 49.6222 71.8806 50 71.8806C51.1056 71.8806 52.1944 71.7972 53.2583 71.6389C53.3028 71.6306 53.3472 71.625 53.3944 71.6167C53.4917 71.6 53.5917 71.5833 53.6889 71.5667C53.8 71.55 53.9111 71.5306 54.0222 71.5083C54.0556 71.5028 54.0917 71.4944 54.125 71.4889C54.6389 71.3889 55.1528 71.2722 55.6611 71.1361C55.8389 71.0889 56.0139 71.0389 56.1889 70.9861C56.3583 70.9361 56.525 70.8861 56.6917 70.8333C56.7083 70.8278 56.725 70.8222 56.7444 70.8167C56.8778 70.7722 57.0083 70.7278 57.1417 70.6833C57.2278 70.6528 57.3111 70.6222 57.3972 70.5917C57.4556 70.5722 57.5111 70.55 57.5694 70.5306C63.5556 68.3167 68.3139 63.5556 70.5278 57.5722C70.55 57.5139 70.5694 57.4556 70.5917 57.4C70.6222 57.3139 70.6528 57.2278 70.6806 57.1417C70.7278 57.0111 70.7722 56.8778 70.8139 56.7444C70.8194 56.7278 70.825 56.7111 70.8306 56.6944C70.9389 56.3528 71.0417 56.0111 71.1333 55.6639C71.2694 55.1556 71.3861 54.6444 71.4861 54.1306C71.4944 54.0944 71.5 54.0556 71.5083 54.0194C71.5278 53.9111 71.5472 53.8028 71.5667 53.6972C71.5833 53.5944 71.6 53.4917 71.6167 53.3889C71.6222 53.3472 71.6278 53.3056 71.6361 53.2667C71.7944 52.2 71.8806 51.1111 71.8806 50V50ZM78.925 87.1638C79.8694 83.8889 80.2361 81.0278 75.7556 76.5223L65.7861 66.5361C64.1222 68.1306 62.2278 69.4583 60.15 70.4833C60.1472 70.4833 60.1444 70.4861 60.1417 70.4889C59.9389 70.5889 59.7333 70.6833 59.5278 70.7778C59.2889 70.8861 59.0472 70.9917 58.8028 71.0917C58.7556 71.1139 58.7056 71.1333 58.6556 71.1528C58.575 71.1861 58.4972 71.2167 58.4167 71.2472C57.7611 71.5083 57.0972 71.7389 56.425 71.9389L60.0889 85.5666C61.75 91.7 64.4111 92.8139 67.7194 93.6334C69.9 94.1722 72.2472 93.7667 74.5139 92.4583C76.7778 91.1528 78.3028 89.3194 78.925 87.1638V87.1638ZM75.7556 23.4778C80.2361 18.9722 79.8694 16.1111 78.925 12.8389C78.3028 10.6806 76.7778 8.85 74.5139 7.54167C72.2472 6.23333 69.9 5.82778 67.7194 6.36666C64.4111 7.18611 61.75 8.3 60.0889 14.4333L56.425 28.0611C57.1417 28.2722 57.85 28.5194 58.5472 28.8028C58.6139 28.8306 58.6778 28.8583 58.7444 28.8833C58.8111 28.9111 58.8778 28.9389 58.9444 28.9694C61.4944 30.0472 63.8056 31.5694 65.7861 33.4639L75.7556 23.4778ZM92.4583 74.5139C93.7639 72.25 94.1722 69.9 93.6306 67.7194C92.8139 64.4139 91.7 61.7528 85.5667 60.0889L71.9361 56.4278C71.725 57.1444 71.4806 57.85 71.1972 58.5472C71.1694 58.6139 71.1417 58.6806 71.1139 58.7472C71.0861 58.8139 71.0611 58.8806 71.0306 58.9444C69.9528 61.4972 68.4306 63.8056 66.5361 65.7861L76.5194 75.7584C81.0278 80.2389 83.8889 79.8722 87.1611 78.9277C89.3194 78.3056 91.15 76.7778 92.4583 74.5139ZM93.6306 32.2806C94.1722 30.1 93.7639 27.75 92.4583 25.4861C91.15 23.2222 89.3194 21.6972 87.1611 21.075C83.8889 20.1278 81.0278 19.7611 76.5194 24.2444L66.5361 34.2139C68.4306 36.1944 69.9528 38.5056 71.0306 41.0556C71.0611 41.1222 71.0861 41.1861 71.1139 41.2528C71.1417 41.3194 71.1694 41.3861 71.1972 41.4528C71.4806 42.15 71.725 42.8583 71.9361 43.5722L85.5667 39.9111C91.7 38.25 92.8139 35.5861 93.6306 32.2806V32.2806ZM99.025 50C99.025 47.3861 98.2028 45.1472 96.6472 43.5306C94.2833 41.075 91.9889 39.3278 85.8444 40.9556L72.2139 44.5972C72.6167 46.25 72.8333 47.9417 72.8583 49.6444C72.8583 49.65 72.8583 49.6556 72.8583 49.6639C72.8611 49.775 72.8611 49.8889 72.8611 50C72.8611 50.1139 72.8611 50.225 72.8583 50.3389C72.8583 50.3444 72.8583 50.35 72.8583 50.3583C72.8333 52.0611 72.6167 53.75 72.2139 55.4028L85.8472 59.0472C91.9889 60.675 94.2833 58.925 96.6472 56.4694C98.2028 54.8528 99.025 52.6139 99.025 50V50ZM97.3472 42.8556C99.0833 44.6583 100 47.1306 100 50C100 52.8722 99.0833 55.3417 97.3472 57.1444C95.5056 59.0583 93.6056 60.6528 90.0694 60.6528C89.9583 60.6528 89.8444 60.65 89.7306 60.6472C93.0333 62.4333 93.9194 64.8278 94.575 67.4861C95.1778 69.9167 94.7361 72.5139 93.3 75C91.8639 77.4861 89.8361 79.1667 87.4306 79.8611C86.2 80.2167 84.9944 80.5 83.7333 80.5C82.2972 80.5 80.7861 80.1334 79.0833 79.0862C81.0528 82.2833 80.6194 84.8 79.8611 87.4334C79.1667 89.8362 77.4861 91.8666 75 93.3027C73.2333 94.3194 71.4139 94.8389 69.6361 94.8389C68.9111 94.8389 68.1917 94.7528 67.4861 94.5778C64.825 93.9195 62.4306 93.0333 60.6444 89.7278C60.75 93.4833 59.1194 95.45 57.1444 97.3472C55.3417 99.0833 52.8694 100 50 100C47.1278 100 44.6583 99.0833 42.8556 97.3472C40.8806 95.45 39.25 93.4833 39.3556 89.7278C37.5694 93.0333 35.1722 93.9195 32.5139 94.5778C31.8083 94.7528 31.0889 94.8389 30.3611 94.8389C28.5861 94.8389 26.7639 94.3194 25 93.3027C22.5139 91.8666 20.8305 89.8362 20.1389 87.4334C19.3778 84.8 18.9473 82.2833 20.9138 79.0862C19.2112 80.1334 17.7028 80.5 16.2667 80.5C15.0028 80.5 13.7972 80.2167 12.5666 79.8611C10.1638 79.1667 8.13336 77.4861 6.69728 75C5.26106 72.5139 4.82228 69.9167 5.42219 67.4861C6.0805 64.8278 6.96386 62.4333 10.2667 60.6472C10.1528 60.65 10.0388 60.6528 9.92772 60.6528C6.39442 60.6528 4.49164 59.0583 2.64996 57.1444C0.916667 55.3417 0 52.8722 0 50C0 47.1306 0.916667 44.6583 2.64996 42.8556C4.55003 40.8806 6.51672 39.25 10.2694 39.3556C6.96386 37.5694 6.0805 35.175 5.42219 32.5139C4.82228 30.0861 5.26106 27.4861 6.69728 25C8.13336 22.5139 10.1638 20.8333 12.5666 20.1389C15.2 19.3778 17.7167 18.9472 20.9138 20.9139C18.9473 17.7167 19.3778 15.2 20.1389 12.5694C20.8305 10.1639 22.5139 8.13611 25 6.7C27.4861 5.26389 30.0833 4.82222 32.5139 5.42222C35.1722 6.08055 37.5694 6.96667 39.3556 10.2722C39.25 6.51667 40.8806 4.55278 42.8556 2.65278C44.6583 0.916666 47.1278 -7.45058e-07 50 -7.45058e-07C52.8694 -7.45058e-07 55.3417 0.916666 57.1444 2.65278C59.1194 4.55278 60.75 6.51667 60.6444 10.2722C62.4306 6.96667 64.825 6.08055 67.4861 5.42222C69.9139 4.82222 72.5139 5.26389 75 6.7C77.4861 8.13611 79.1667 10.1639 79.8611 12.5694C80.6194 15.2 81.0528 17.7167 79.0833 20.9139C82.2833 18.9472 84.8 19.3778 87.4306 20.1389C89.8361 20.8333 91.8639 22.5139 93.3 25C94.7361 27.4861 95.1778 30.0861 94.575 32.5139C93.9167 35.175 93.0333 37.5694 89.7278 39.3556C93.4833 39.25 95.4472 40.8806 97.3472 42.8556"
  //         fill="black"
  //       />
  //       <path
  //         d="M59.9861 39.9583C60.1361 40.4195 60 40.8778 59.6806 40.9833C59.3611 41.0889 58.9778 40.8 58.825 40.3389C58.675 39.8778 58.8111 39.4195 59.1306 39.3139C59.4528 39.2111 59.8333 39.4972 59.9861 39.9583Z"
  //         fill="white"
  //       />
  //       <path
  //         d="M58.0806 37.2583C58.3 37.925 58.125 38.5805 57.6917 38.7222C57.2583 38.8667 56.7278 38.4417 56.5083 37.775C56.2889 37.1083 56.4639 36.4528 56.8972 36.3083C57.3333 36.1667 57.8611 36.5917 58.0806 37.2583"
  //         fill="white"
  //       />
  //       <path
  //         d="M42.7361 36.3083C43.1694 36.4528 43.3444 37.1083 43.125 37.775C42.9056 38.4417 42.3778 38.8667 41.9417 38.7222C41.5083 38.5805 41.3333 37.925 41.5528 37.2583C41.7722 36.5917 42.3028 36.1667 42.7361 36.3083"
  //         fill="white"
  //       />
  //       <path
  //         d="M41.9611 39.3139C42.2805 39.4195 42.4194 39.8778 42.2667 40.3389C42.1167 40.8 41.7333 41.0889 41.4139 40.9833C41.0944 40.8778 40.9555 40.4195 41.1083 39.9583C41.2583 39.4972 41.6417 39.2111 41.9611 39.3139Z"
  //         fill="white"
  //       />
  //     </svg>
  //   </div>
  // )
}
