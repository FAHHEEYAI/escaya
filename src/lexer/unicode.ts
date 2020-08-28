// Unicode v. 13 support
/*eslint-disable*/

export const unicodeLookup = ((compressed, lookup) => {
  const result = new Uint32Array(174080)
  let index = 0;
  let subIndex = 0
  while (index < 3568) {
      const inst = compressed[index++]
      if (inst < 0) {
          subIndex -= inst
      } else {
          let code = compressed[index++]
          if (inst & 2) code = lookup[code]
          if (inst & 1) {
              result.fill(code, subIndex, subIndex += compressed[index++])
          } else {
              result[subIndex++] = code
          }
      }
  }
  return result
})(
  [-1,2,24,2,25,2,5,-1,0,77595648,3,44,2,3,0,14,2,57,2,58,3,0,3,0,3168796671,0,4294956992,2,1,2,0,2,59,3,0,4,0,4294966523,3,0,4,2,16,2,60,2,0,0,4294836735,0,3221225471,0,4294901942,2,61,0,134152192,3,0,2,0,4294951935,3,0,2,0,2683305983,0,2684354047,2,17,2,0,0,4294961151,3,0,2,2,19,2,0,0,608174079,2,0,2,131,2,6,2,56,-1,2,37,0,4294443263,2,1,3,0,3,0,4294901711,2,39,0,4089839103,0,2961209759,0,1342439375,0,4294543342,0,3547201023,0,1577204103,0,4194240,0,4294688750,2,2,0,80831,0,4261478351,0,4294549486,2,2,0,2967484831,0,196559,0,3594373100,0,3288319768,0,8469959,2,196,2,3,0,3825204735,0,123747807,0,65487,0,4294828015,0,4092591615,0,1080049119,0,458703,2,3,2,0,0,2163244511,0,4227923919,0,4236247022,2,66,0,4284449919,0,851904,2,4,2,11,0,67076095,-1,2,67,0,1073741743,0,4093591391,-1,0,50331649,0,3265266687,2,32,0,4294844415,0,4278190047,2,18,2,129,-1,3,0,2,2,21,2,0,2,9,2,0,2,14,2,15,3,0,10,2,69,2,0,2,70,2,71,2,72,2,0,2,73,2,0,2,10,0,261632,2,23,3,0,2,2,12,2,4,3,0,18,2,74,2,5,3,0,2,2,75,0,2088959,2,27,2,8,0,909311,3,0,2,0,814743551,2,41,0,67057664,3,0,2,2,40,2,0,2,28,2,0,2,29,2,7,0,268374015,2,26,2,49,2,0,2,76,0,134153215,-1,2,6,2,0,2,7,0,2684354559,0,67044351,0,3221160064,0,1,-1,3,0,2,2,42,0,1046528,3,0,3,2,8,2,0,2,51,0,4294960127,2,9,2,38,2,10,0,4294377472,2,11,3,0,7,0,4227858431,3,0,8,2,12,2,0,2,78,2,9,2,0,2,79,2,80,2,81,-1,2,124,0,1048577,2,82,2,13,-1,2,13,0,131042,2,83,2,84,2,85,2,0,2,33,-83,2,0,2,53,2,7,3,0,4,0,1046559,2,0,2,14,2,0,0,2147516671,2,20,3,86,2,2,0,-16,2,87,0,524222462,2,4,2,0,0,4269801471,2,4,2,0,2,15,2,77,2,16,3,0,2,2,47,2,0,-1,2,17,-16,3,0,206,-2,3,0,655,2,18,3,0,36,2,68,-1,2,17,2,9,3,0,8,2,89,2,121,2,0,0,3220242431,3,0,3,2,19,2,90,2,91,3,0,2,2,92,2,0,2,93,2,94,2,0,0,4351,2,0,2,8,3,0,2,0,67043391,0,3909091327,2,0,2,22,2,8,2,18,3,0,2,0,67076097,2,7,2,0,2,20,0,67059711,0,4236247039,3,0,2,0,939524103,0,8191999,2,97,2,98,2,15,2,21,3,0,3,0,67057663,3,0,349,2,99,2,100,2,6,-264,3,0,11,2,22,3,0,2,2,31,-1,0,3774349439,2,101,2,102,3,0,2,2,19,2,103,3,0,10,2,9,2,17,2,0,2,45,2,0,2,30,2,104,2,23,0,1638399,2,173,2,105,3,0,3,2,18,2,24,2,25,2,5,2,26,2,0,2,7,2,106,-1,2,107,2,108,2,109,-1,3,0,3,2,11,-2,2,0,2,27,-3,2,151,-4,2,18,2,0,2,35,0,1,2,0,2,62,2,28,2,11,2,9,2,0,2,110,-1,3,0,4,2,9,2,21,2,111,2,6,2,0,2,112,2,0,2,48,-4,3,0,9,2,20,2,29,2,30,-4,2,113,2,114,2,29,2,20,2,7,-2,2,115,2,29,2,31,-2,2,0,2,116,-2,0,4277137519,0,2269118463,-1,3,18,2,-1,2,32,2,36,2,0,3,29,2,2,34,2,19,-3,3,0,2,2,33,-1,2,0,2,34,2,0,2,34,2,0,2,46,-10,2,0,0,203775,-2,2,18,2,43,2,35,-2,2,17,2,117,2,20,3,0,2,2,36,0,2147549120,2,0,2,11,2,17,2,135,2,0,2,37,2,52,0,5242879,3,0,2,0,402644511,-1,2,120,0,1090519039,-2,2,122,2,38,2,0,0,67045375,2,39,0,4226678271,0,3766565279,0,2039759,-4,3,0,2,0,3288270847,0,3,3,0,2,0,67043519,-5,2,0,0,4282384383,0,1056964609,-1,3,0,2,0,67043345,-1,2,0,2,40,2,41,-1,2,10,2,42,-6,2,0,2,11,-3,3,0,2,0,2147484671,2,125,0,4190109695,2,50,-2,2,126,0,4244635647,0,27,2,0,2,7,2,43,2,0,2,63,-1,2,0,2,40,-8,2,54,2,44,0,67043329,2,127,2,45,0,8388351,-2,2,128,0,3028287487,2,46,2,130,0,33259519,2,41,-9,2,20,-5,2,64,-2,3,0,28,2,31,-3,3,0,3,2,47,3,0,6,2,48,-85,3,0,33,2,47,-126,3,0,18,2,36,-269,3,0,17,2,40,2,7,2,41,-2,2,17,2,49,2,0,2,20,2,50,2,132,2,23,-21,3,0,2,-4,3,0,2,0,4294936575,2,0,0,4294934783,-2,0,196635,3,0,191,2,51,3,0,38,2,29,-1,2,33,-279,3,0,8,2,7,-1,2,133,2,52,3,0,11,2,6,-72,3,0,3,2,134,0,1677656575,-166,0,4161266656,0,4071,0,15360,-4,0,28,-13,3,0,2,2,37,2,0,2,136,2,137,2,55,2,0,2,138,2,139,2,140,3,0,10,2,141,2,142,2,15,3,37,2,3,53,2,3,54,2,0,4294954999,2,0,-16,2,0,2,88,2,0,0,2105343,0,4160749584,0,65534,-42,0,4194303871,0,2011,-6,2,0,0,1073684479,0,17407,-11,2,0,2,31,-40,3,0,6,0,8323103,-1,3,0,2,2,42,-37,2,55,2,144,2,145,2,146,2,147,2,148,-105,2,24,-32,3,0,1334,2,9,-1,3,0,129,2,27,3,0,6,2,9,3,0,180,2,149,3,0,233,0,1,-96,3,0,16,2,9,-47,3,0,154,2,56,-22381,3,0,7,2,23,-6130,3,5,2,-1,0,69207040,3,44,2,3,0,14,2,57,2,58,-3,0,3168731136,0,4294956864,2,1,2,0,2,59,3,0,4,0,4294966275,3,0,4,2,16,2,60,2,0,2,33,-1,2,17,2,61,-1,2,0,2,56,0,4294885376,3,0,2,0,3145727,0,2617294944,0,4294770688,2,23,2,62,3,0,2,0,131135,2,95,0,70256639,0,71303167,0,272,2,40,2,56,-1,2,37,2,30,-1,2,96,2,63,0,4278255616,0,4294836227,0,4294549473,0,600178175,0,2952806400,0,268632067,0,4294543328,0,57540095,0,1577058304,0,1835008,0,4294688736,2,65,2,64,0,33554435,2,123,2,65,2,152,0,131075,0,3594373096,0,67094296,2,64,-1,0,4294828000,0,603979263,2,161,0,3,0,4294828001,0,602930687,2,184,0,393219,0,4294828016,0,671088639,0,2154840064,0,4227858435,0,4236247008,2,66,2,36,-1,2,4,0,917503,2,36,-1,2,67,0,537788335,0,4026531935,-1,0,1,-1,2,32,2,68,0,7936,-3,2,0,0,2147485695,0,1010761728,0,4292984930,0,16387,2,0,2,14,2,15,3,0,10,2,69,2,0,2,70,2,71,2,72,2,0,2,73,2,0,2,11,-1,2,23,3,0,2,2,12,2,4,3,0,18,2,74,2,5,3,0,2,2,75,0,253951,3,19,2,0,122879,2,0,2,8,0,276824064,-2,3,0,2,2,40,2,0,0,4294903295,2,0,2,29,2,7,-1,2,17,2,49,2,0,2,76,2,41,-1,2,20,2,0,2,27,-2,0,128,-2,2,77,2,8,0,4064,-1,2,119,0,4227907585,2,0,2,118,2,0,2,48,2,174,2,9,2,38,2,10,-1,0,74440192,3,0,6,-2,3,0,8,2,12,2,0,2,78,2,9,2,0,2,79,2,80,2,81,-3,2,82,2,13,-3,2,83,2,84,2,85,2,0,2,33,-83,2,0,2,53,2,7,3,0,4,0,817183,2,0,2,14,2,0,0,33023,2,20,3,86,2,-17,2,87,0,524157950,2,4,2,0,2,88,2,4,2,0,2,15,2,77,2,16,3,0,2,2,47,2,0,-1,2,17,-16,3,0,206,-2,3,0,655,2,18,3,0,36,2,68,-1,2,17,2,9,3,0,8,2,89,0,3072,2,0,0,2147516415,2,9,3,0,2,2,23,2,90,2,91,3,0,2,2,92,2,0,2,93,2,94,0,4294965179,0,7,2,0,2,8,2,91,2,8,-1,0,1761345536,2,95,0,4294901823,2,36,2,18,2,96,2,34,2,167,0,2080440287,2,0,2,33,2,143,0,3296722943,2,0,0,1046675455,0,939524101,0,1837055,2,97,2,98,2,15,2,21,3,0,3,0,7,3,0,349,2,99,2,100,2,6,-264,3,0,11,2,22,3,0,2,2,31,-1,0,2700607615,2,101,2,102,3,0,2,2,19,2,103,3,0,10,2,9,2,17,2,0,2,45,2,0,2,30,2,104,-3,2,105,3,0,3,2,18,-1,3,5,2,2,26,2,0,2,7,2,106,-1,2,107,2,108,2,109,-1,3,0,3,2,11,-2,2,0,2,27,-8,2,18,2,0,2,35,-1,2,0,2,62,2,28,2,29,2,9,2,0,2,110,-1,3,0,4,2,9,2,17,2,111,2,6,2,0,2,112,2,0,2,48,-4,3,0,9,2,20,2,29,2,30,-4,2,113,2,114,2,29,2,20,2,7,-2,2,115,2,29,2,31,-2,2,0,2,116,-2,0,4277075969,2,29,-1,3,18,2,-1,2,32,2,117,2,0,3,29,2,2,34,2,19,-3,3,0,2,2,33,-1,2,0,2,34,2,0,2,34,2,0,2,48,-10,2,0,0,197631,-2,2,18,2,43,2,118,-2,2,17,2,117,2,20,2,119,2,51,-2,2,119,2,23,2,17,2,33,2,119,2,36,0,4294901904,0,4718591,2,119,2,34,0,335544350,-1,2,120,2,121,-2,2,122,2,38,2,7,-1,2,123,2,65,0,3758161920,0,3,-4,2,0,2,27,0,2147485568,0,3,2,0,2,23,0,176,-5,2,0,2,47,2,187,-1,2,0,2,23,2,199,-1,2,0,0,16779263,-2,2,11,-7,2,0,2,121,-3,3,0,2,2,124,2,125,0,2147549183,0,2,-2,2,126,2,35,0,10,0,4294965249,0,67633151,0,4026597376,2,0,0,536871935,-1,2,0,2,40,-8,2,54,2,47,0,1,2,127,2,23,-3,2,128,2,35,2,129,2,130,0,16778239,-10,2,34,-5,2,64,-2,3,0,28,2,31,-3,3,0,3,2,47,3,0,6,2,48,-85,3,0,33,2,47,-126,3,0,18,2,36,-269,3,0,17,2,40,2,7,-3,2,17,2,131,2,0,2,23,2,48,2,132,2,23,-21,3,0,2,-4,3,0,2,0,67583,-1,2,103,-2,0,11,3,0,191,2,51,3,0,38,2,29,-1,2,33,-279,3,0,8,2,7,-1,2,133,2,52,3,0,11,2,6,-72,3,0,3,2,134,2,135,-187,3,0,2,2,37,2,0,2,136,2,137,2,55,2,0,2,138,2,139,2,140,3,0,10,2,141,2,142,2,15,3,37,2,3,53,2,3,54,2,2,143,-73,2,0,0,1065361407,0,16384,-11,2,0,2,121,-40,3,0,6,2,117,-1,3,0,2,0,2063,-37,2,55,2,144,2,145,2,146,2,147,2,148,-138,3,0,1334,2,9,-1,3,0,129,2,27,3,0,6,2,9,3,0,180,2,149,3,0,233,0,1,-96,3,0,16,2,9,-47,3,0,154,2,56,-28517,2,150,-256,2,194,-34558,2,150,-4,0,1,-174,0,1,-75,2,56,0,33536,2,124,-125,0,1,-1654,2,124,-32776,2,0,0,1,-1,2,124,2,0,0,8193,-21,2,195,0,10255,0,4,-11,2,64,2,172,-1,0,71680,-1,2,162,0,4292900864,0,805306431,-5,2,151,-1,2,158,-1,0,6144,-2,2,127,-1,2,155,-1,0,2147532800,2,152,2,166,2,0,2,165,0,524032,0,4,-4,2,191,0,205128192,0,1333757536,0,2147483696,0,423953,0,747766272,0,2717763192,0,4286578751,0,278545,2,153,0,4294886464,0,33292336,0,417809,2,153,0,1327482464,0,4278190128,0,700594195,0,1006647527,0,4286497336,0,4160749631,2,154,0,469762560,0,4171219488,0,8323120,2,154,0,202375680,0,3214918176,0,4294508592,2,154,-1,0,983584,0,48,0,58720273,0,3489923072,0,10517376,0,4293066815,0,1,0,2013265920,2,178,2,0,0,2089,0,3221225552,0,201375904,2,0,-2,0,256,0,122880,0,16777216,2,151,0,4160757760,2,0,-6,2,168,-11,0,3263218176,-1,0,49664,0,2160197632,0,8388802,-1,0,12713984,-1,2,155,2,160,2,179,-2,2,163,-20,0,3758096385,-2,2,156,0,4292878336,2,90,2,170,0,4294057984,-2,2,164,2,157,2,176,-2,2,156,-1,2,183,-1,2,171,2,124,0,4026593280,0,14,0,4292919296,-1,2,159,0,939588608,-1,0,805306368,-1,2,124,0,1610612736,2,157,2,158,2,4,2,0,-2,2,159,2,160,-3,0,267386880,-1,2,161,0,7168,-1,0,65024,2,155,2,162,2,180,-7,2,169,-8,2,163,-1,0,1426112704,2,164,-1,2,165,0,271581216,0,2149777408,2,23,2,162,2,124,0,851967,2,181,-1,2,23,2,182,-4,2,159,-20,2,197,2,166,-56,0,3145728,2,186,-4,2,167,2,124,-4,0,32505856,-1,2,168,-1,0,2147385088,2,90,1,2155905152,2,-3,2,103,2,0,2,169,-2,2,170,-6,2,171,0,4026597375,0,1,-1,0,1,-1,2,172,-3,2,117,2,64,-2,2,167,-2,2,177,2,124,-878,2,160,-36,2,173,-1,2,203,-10,2,189,-5,2,175,-6,0,4294965251,2,27,-1,2,174,-1,2,175,-2,0,4227874752,-3,0,2146435072,2,160,-2,0,1006649344,2,124,-1,2,90,0,201375744,-3,0,134217720,2,90,0,4286677377,0,32896,-1,2,159,-3,2,176,-349,2,177,0,1920,2,178,3,0,264,-11,2,158,-2,2,179,2,0,0,520617856,0,2692743168,0,36,-3,0,524284,-11,2,23,-1,2,188,-1,2,185,0,3221291007,2,179,-1,2,204,0,2158720,-3,2,160,0,1,-4,2,124,0,3808625411,0,3489628288,2,202,0,1207959680,0,3221274624,2,0,-3,2,180,0,120,0,7340032,-2,2,181,2,4,2,23,2,164,3,0,4,2,160,-1,2,182,2,178,-1,0,8176,2,183,2,180,2,184,-1,0,4290773232,2,0,-4,2,164,2,190,0,15728640,2,178,-1,2,162,-1,0,4294934512,3,0,4,-9,2,90,2,171,2,185,3,0,4,0,704,0,1849688064,2,186,-1,2,124,0,4294901887,2,0,0,130547712,0,1879048192,2,201,3,0,2,-1,2,187,2,188,-1,0,17829776,0,2025848832,0,4261477888,-2,2,0,-1,0,4286580608,-1,0,29360128,2,193,0,16252928,0,3791388672,2,38,3,0,2,-2,2,198,2,0,-1,2,103,-1,0,66584576,-1,2,192,3,0,9,2,124,-1,0,4294755328,3,0,2,-1,2,162,2,179,3,0,2,2,23,2,189,2,90,-2,0,245760,0,2147418112,-1,2,151,2,205,0,4227923456,-1,2,165,2,162,2,90,-3,0,4292870145,0,262144,2,124,3,0,2,0,1073758848,2,190,-1,0,4227921920,2,191,0,68289024,0,528402016,0,4292927536,3,0,4,-2,0,268435456,2,91,-2,2,192,3,0,5,-1,2,193,2,164,2,0,-2,0,4227923936,2,62,-1,2,156,2,95,2,0,2,155,2,159,3,0,6,-1,2,178,3,0,3,-2,0,2146959360,0,9440640,0,104857600,0,4227923840,3,0,2,2,194,2,195,2,77,-2,2,162,-2,2,119,-1,2,156,3,0,8,0,512,0,8388608,2,196,2,173,2,188,0,4286578944,3,0,2,0,1152,0,1266679808,2,192,0,576,0,4261707776,2,95,3,0,9,2,156,3,0,5,2,16,-1,0,2147221504,-28,2,179,3,0,3,-3,0,4292902912,-6,2,96,3,0,85,-33,0,4294934528,3,0,126,-18,2,197,3,0,269,-17,2,156,2,124,2,200,3,0,2,2,23,0,4290822144,-2,0,67174336,0,520093700,2,17,3,0,21,-2,2,180,3,0,3,-2,0,30720,-1,0,32512,3,0,2,0,4294770656,-191,2,175,-38,2,171,2,0,2,198,3,0,279,-8,2,124,2,0,0,4294508543,0,65295,-11,2,178,3,0,72,-3,0,3758159872,0,201391616,3,0,155,-7,2,171,-1,0,384,-1,0,133693440,-3,2,198,-2,2,26,3,0,4,2,170,-2,2,90,2,156,3,0,4,-2,2,165,-1,2,151,0,335552923,2,199,-1,0,538974272,0,2214592512,0,132000,-10,0,192,-8,0,12288,-21,0,134213632,0,4294901761,3,0,42,0,100663424,0,4294965284,3,0,6,-1,0,3221282816,2,200,3,0,11,-1,2,201,3,0,40,-6,0,4286578784,2,0,-2,0,1006694400,3,0,24,2,35,-1,2,94,3,0,2,0,1,2,164,3,0,6,2,199,0,4110942569,0,1432950139,0,2701658217,0,4026532864,0,4026532881,2,0,2,45,3,0,8,-1,2,159,-2,2,170,0,98304,0,65537,2,171,-5,0,4294950912,2,0,2,118,0,65528,2,178,0,4294770176,2,26,3,0,4,-30,2,175,0,3758153728,-3,2,170,-2,2,156,2,189,2,159,-1,2,192,-1,2,162,0,4294754304,3,0,2,-3,0,33554432,-2,2,202,-3,2,170,0,4175478784,2,203,0,4286643712,0,4286644216,2,0,-4,2,204,-1,2,166,0,4227923967,3,0,32,-1334,2,164,2,0,-129,2,94,-6,2,164,-180,2,205,-233,2,4,3,0,96,-16,2,164,3,0,47,-154,2,166,3,0,22381,-7,2,17,3,0,6128],
  [4294967295,4294967291,4092460543,4294828031,4294967294,134217726,268435455,2147483647,1048575,1073741823,3892314111,134217727,1061158911,536805376,4294910143,4160749567,4294901759,4294901760,536870911,262143,8388607,4294902783,4294918143,65535,67043328,2281701374,4294967232,2097151,4294903807,4194303,255,67108863,4294967039,511,524287,131071,127,4292870143,4294902271,4294549487,33554431,1023,67047423,4294901888,4286578687,4294770687,67043583,32767,15,2047999,67043343,16777215,4294902000,4294934527,4294966783,4294967279,2047,262083,20511,4290772991,41943039,493567,4294959104,603979775,65536,602799615,805044223,4294965206,8191,1031749119,4294917631,2134769663,4286578493,4282253311,4294942719,33540095,4294905855,4294967264,2868854591,1608515583,265232348,534519807,2147614720,1060109444,4093640016,17376,2139062143,224,4169138175,4294909951,4286578688,4294967292,4294965759,2044,4292870144,4294966272,4294967280,8289918,4294934399,4294901775,4294965375,1602223615,4294967259,4294443008,268369920,4292804608,486341884,4294963199,3087007615,1073692671,4128527,4279238655,4294902015,4294966591,2445279231,3670015,3238002687,31,63,4294967288,4294705151,4095,3221208447,4294549472,2147483648,4285526655,4294966527,4294705152,4294966143,64,4294966719,16383,3774873592,458752,536807423,67043839,3758096383,3959414372,3755993023,2080374783,4294835295,4294967103,4160749565,4087,184024726,2862017156,1593309078,268434431,268434414,4294901763,9216,536870912,2952790016,202506752,139264,402653184,4261412864,4227922944,49152,61440,3758096384,117440512,65280,3233808384,3221225472,2097152,4294965248,32768,57152,67108864,4293918720,4290772992,25165824,57344,4227915776,4278190080,4227907584,65520,4026531840,4227858432,4160749568,3758129152,4294836224,63488,1073741824,4294967040,4194304,251658240,196608,4294963200,64512,417808,4227923712,12582912,768,50331648,65472,4294967168,4294966784,16,4294917120,2080374784,4096,65408,524288,65532]
)
