const ipa = [{char: 'i', english: 'ee', ipa: 'i'},
{char: 'y', english: 'fronted u', ipa: 'y'},
{char: 'ɪ', english: 'short i', ipa: 'ɪ'},
{char: 'ʏ', english: 'short IPA y', ipa: null},
{char: 'ɨ', english: 'neutralized ee', ipa: null},
{char: 'ʉ', english: 'neutralized oo', ipa: null},
{char: 'ɯ', english: 'unrounded oo', ipa: null},
{char: 'u', english: 'oo', ipa: 'u'},
{char: 'ʊ', english: 'oo in wood', ipa: null},
{char: 'e', english: 'e sound in play', ipa: 'e'},
{char: 'ø', english: 'rounded IPA o', ipa: null},
{char: 'ɘ', english: 'Australian i in bird', ipa: null},
{char: 'ɵ', english: 'rounded ɘ', ipa: null},
{char: 'ɤ', english: 'unrounded o', ipa: null},
{char: 'o', english: 'o in ohm', ipa: 'o'},
{char: 'ɛ', english: 'e in sped', ipa: null},
{char: 'œ', english: 'rounded ɛ', ipa: null},
{char: 'ɜ', english: 'British i in bird', ipa: null},
{char: 'ɞ', english: 'rounded ɜ', ipa: null},
{char: 'ʌ', english: 'u in but', ipa: null},
{char: 'ɔ', english: 'o in for', ipa: null},
{char: 'æ', english: 'a in sat', ipa: null},
{char: 'ɐ', english: 'Scottish a in stack', ipa: null},
{char: 'a', english: 'a sound in thigh', ipa: 'a'},
{char: 'ɶ', english: 'rounded IPA a', ipa: null},
{char: 'ɑ', english: 'a in father', ipa: null},
{char: 'ɒ', english: 'rounded ɑ', ipa: null},
{char: 'p', english: 'p', ipa: 'p'},
{char: 'b', english: 'b', ipa: 'b'},
{char: 't', english: 't', ipa: 't'},
{char: 'd', english: 'd', ipa: 'd'},
{char: 'ʈ', english: 't with curled tongue', ipa: null},
{char: 'ɖ', english: 'd with curled tongue', ipa: null},
{char: 'c', english: 'fronted k', ipa: null},
{char: 'ɟ', english: 'voiced IPA c', ipa: null},
{char: 'k', english: 'k', ipa: 'k'},
{char: 'g', english: 'g', ipa: 'g'},
{char: 'q', english: 'uvular k', ipa: null},
{char: 'ɢ', english: 'voiced IPA q', ipa: null},
{char: 'ʔ', english: 'first h in uh-oh', ipa: 'ʔ'},
{char: 'm', english: 'm', ipa: 'm'},
{char: 'ɱ', english: 'm with your top teeth', ipa: null},
{char: 'n', english: 'n', ipa: 'n'},
{char: 'ɳ', english: 'n with curled tongue', ipa:  null},
{char: 'ɲ', english: 'nyeh', ipa: null},
{char: 'ŋ', english: 'ng in going', ipa: null},
{char: 'ɴ', english: 'uvular ŋ', ipa: null},
{char: 'ʙ', english: 'flapping lips', ipa: null},
{char: 'r', english: 'rolled r', ipa: 'r'},
{char: 'ʀ', english: 'rolled uvular r', ipa: null},
{char: 'ⱱ', english: 'tap of teeth on lips', ipa: null},
{char: 'ɾ', english: 'tt in setting', ipa: null},
{char: 'ɽ', english: 'ɾ with curled tongue', ipa: null},
{char: 'ɸ', english: 'f without teeth', ipa: null},
{char: 'β', english: 'v without teeth', ipa: null},
{char: 'f', english: 'f', ipa: 'f'},
{char: 'v', english: 'v', ipa: 'v'},
{char: 'θ', english: 'th in think', ipa: 'θ'},
{char: 'ð', english: 'th in this', ipa: 'ð'},
{char: 's', english: 's', ipa: 's'},
{char: 'z', english: 'z', ipa: 'z'},
{char: 'ʃ', english: 'sh', ipa: 'ʃ'},
{char: 'ʒ', english: 's in pleasure', ipa: 'ʒ'},
{char: 'ʂ', english: 's with curled tongue', ipa: null},
{char: 'ʐ', english: 'z with curled tongue', ipa: null},
{char: 'ç', english: 'fronted kh', ipa: null},
{char: 'ʝ', english: 'voiced ç', ipa: null},
{char: 'x', english: 'scottish ch', ipa: 'x'},
{char: 'ɣ', english: 'voiced x', ipa: null},
{char: 'χ (long x)', english: 'uvular x', ipa: null},
{char: 'ʁ', english: 'French r', ipa: null},
{char: 'ħ', english: 'h with your throat constricted', ipa: null},
{char: 'ʕ', english: 'voiced ħ', ipa: null},
{char: 'h', english: 'h', ipa: 'h'},
{char: 'ɦ', english: 'hard h', ipa: 'ɦ'},
{char: 'ɬ', english: 'voiceless l with teeth on tongue', ipa: null},
{char: 'ɮ', english: 'voiced ɬ', ipa: null},
{char: 'ʋ', english: 'v without touching lips', ipa: null},
{char: 'ɹ', english: 'r', ipa: null},
{char: 'ɻ', english: 'r with curled tongue', ipa: null},
{char: 'j', english: 'y in yes', ipa: 'j'},
{char: 'ɰ', english: 'backed j', ipa: null},
{char: 'l', english: 'l', ipa: 'l'},
{char: 'ɭ', english: 'l with curled tongue', ipa: null},
{char: 'ʎ', english: 'j with sides of tongue', ipa: null},
{char: 'ʟ', english: 'backed ʎ', ipa: null},
{char: 'w', english: 'w', ipa: null},
{char: 'ʍ', english: 'voiceless w', ipa: null},
{char: 'ɥ', english: 'fronted w', ipa: null},
{char: 'ɕ', english: 'ʃ with flat of tongue', ipa: null},
{char: 'ʑ', english: 'ʒ with flat of tongue', ipa: null},
{char: 'ɧ', english: 'ʃ and x at the same time', ipa: null}
];

export default ipa;
