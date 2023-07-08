import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailContent = () => {
  return (
    <View style={styles.block}>
      <View style={[styles.border, styles.title]}>
        <Text style={styles.writeTitle}>제목</Text>
        <Text style={styles.writeId}>아이디</Text>
        <Text style={styles.writeDate}>{new Date().toISOString()}</Text>
      </View>
      <ScrollView
        style={[styles.border, styles.body]}
        showsVerticalScrollIndicator={false}>
        <Text>
          대한민국은 민주공화국이다. 이 헌법시행 당시에 이 헌법에 의하여 새로
          설치될 기관의 권한에 속하는 직무를 행하고 있는 기관은 이 헌법에 의하여
          새로운 기관이 설치될 때까지 존속하며 그 직무를 행한다. 국회는 상호원조
          또는 안전보장에 관한 조약, 중요한 국제조직에 관한 조약,
          우호통상항해조약, 주권의 제약에 관한 조약, 강화조약, 국가나 국민에게
          중대한 재정적 부담을 지우는 조약 또는 입법사항에 관한 조약의
          체결·비준에 대한 동의권을 가진다. 형사피해자는 법률이 정하는 바에
          의하여 당해 사건의 재판절차에서 진술할 수 있다. 선거와 국민투표의
          공정한 관리 및 정당에 관한 사무를 처리하기 위하여 선거관리위원회를
          둔다. 대통령은 헌법과 법률이 정하는 바에 의하여 공무원을 임면한다.
          비상계엄하의 군사재판은 군인·군무원의 범죄나 군사에 관한 간첩죄의
          경우와 초병·초소·유독음식물공급·포로에 관한 죄중 법률이 정한 경우에
          한하여 단심으로 할 수 있다. 다만, 사형을 선고한 경우에는 그러하지
          아니하다. 국회의원은 법률이 정하는 직을 겸할 수 없다. 법원은
          최고법원인 대법원과 각급법원으로 조직된다. 대통령은 국민의
          보통·평등·직접·비밀선거에 의하여 선출한다. 모든 국민은 인간으로서의
          존엄과 가치를 가지며, 행복을 추구할 권리를 가진다. 국가는 개인이
          가지는 불가침의 기본적 인권을 확인하고 이를 보장할 의무를 진다. 모든
          국민은 근로의 권리를 가진다. 국가는 사회적·경제적 방법으로 근로자의
          고용의 증진과 적정임금의 보장에 노력하여야 하며, 법률이 정하는 바에
          의하여 최저임금제를 시행하여야 한다. 법률안에 이의가 있을 때에는
          대통령은 제1항의 기간내에 이의서를 붙여 국회로 환부하고, 그 재의를
          요구할 수 있다. 국회의 폐회중에도 또한 같다. 법률이 정하는
          주요방위산업체에 종사하는 근로자의 단체행동권은 법률이 정하는 바에
          의하여 이를 제한하거나 인정하지 아니할 수 있다. 국가는 농·어민과
          중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을
          보장한다. 환경권의 내용과 행사에 관하여는 법률로 정한다.
        </Text>
      </ScrollView>
      <View style={[styles.border, styles.iconGroup]}>
        <Pressable
          style={({pressed}) => [
            Platform.OS === 'ios' &&
              pressed && {
                backgroundColor: '#efefef',
              },
          ]}>
          <Icon name="thumb-up" size={27} />
        </Pressable>
        <Pressable
          style={({pressed}) => [
            Platform.OS === 'ios' &&
              pressed && {
                backgroundColor: '#efefef',
              },
          ]}>
          <Icon name="thumb-down" size={27} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 370,
    backgroundColor: '#fff',
  },
  title: {
    height: 60,
  },
  border: {
    borderBottomWidth: 2,
    borderBottomColor: '#e3e3e3',
  },
  body: {
    height: 270,
  },
  iconGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
  },
});

export default DetailContent;
