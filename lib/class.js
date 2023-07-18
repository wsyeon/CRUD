import axios from 'axios';

export const classInfo = async ({grade, gradeInfo, year, sem, dateInfo}) => {
  const API_KEY = process.env.REACT_APP_KEY;
  try {
    const {data} = await axios.get(
      `https://open.neis.go.kr/hub/hisTimetable?KEY=${API_KEY}&Type=json&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010911&AY=${year}&SEM=${sem}&ALL_TI_YMD=${dateInfo}&DGHT_CRSE_SC_NM=%EC%A3%BC%EA%B0%84&ORD_SC_NM=%EA%B3%B5%EC%97%85%EA%B3%84&DDDEP_NM=${encodeURIComponent(
        gradeInfo,
      )}&GRADE=${grade}&CLASS_NM=1&TI_FROM_YMD=${dateInfo}&TI_TO_YMD=${dateInfo}`,
    );

    const {hisTimetable} = data;
    const {row} = hisTimetable[1];

    return row;
  } catch (e) {
    throw new Error('오늘의 학교 일정은 없어요');
  }
};
