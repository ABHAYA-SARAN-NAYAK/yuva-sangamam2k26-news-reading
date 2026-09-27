function formatScript(rawText) {
  return rawText
    .trim()
    .split(/\n\n+/)
    .map(para => `<p>${para.trim()}</p>`)
    .join('');
}

// ===================================================
//  STORIES DATA
// ===================================================
const stories = [
  {
    id: 1,
    category: { en: 'SPECIAL REPORT', ta: 'சிறப்பு அறிக்கை' },
    filterCategory: 'special-report',
    headline: {
      en: 'The Superstar Who Became a Movement',
      ta: 'இயக்கமாக மாறிய சூப்பர்ஸ்டார்'
    },
    teaser: {
      en: 'Fifty-one years ago, a young bus conductor from Bangalore walked into a camera frame and changed everything.',
      ta: '51 ஆண்டுகளுக்கு முன்பு, பெங்களூரிலிருந்து வந்த ஒரு இளம் பஸ் நடத்துனர் திரையில் நுழைந்து அனைத்தையும் மாற்றினார்.'
    },
    wordCount: 285,
    readTime: '~2 mins',
    body: {
      en: `Good morning, and welcome to this special edition of Yuva Rajini-fied Sangamam News.

I am reporting live from A.M. Jain College, Chennai, where the cultural department has organized a tribute like no other — a celebration of fifty-one glorious years of Superstar Rajinikanth in Indian cinema.

It was the year 1975. A young man named Shivaji Rao Gaekwad — a bus conductor from the Bangalore Transport Service — made a decision that would alter the course of Tamil cinema forever. He enrolled in the Madras Film Institute, took on the screen name Rajinikanth, and debuted in K. Balachander's Apoorva Raagangal.

Nobody could have predicted what followed. From playing villain roles in his early career to becoming the undisputed Superstar of Indian cinema, Rajinikanth's journey is nothing short of extraordinary. His signature style — the coin flip, the cigarette throw, the sunglasses catch — these are not just mannerisms. They are cultural phenomena. They are replicated in college festivals, wedding processions, and even political rallies.

What makes Rajinikanth unique is not just his screen presence, but his philosophy. "I am just a normal person," he has said in multiple interviews. Yet his fans — numbering in the hundreds of millions — see him as something far beyond that. In Japan, his film Muthu became a blockbuster, making him one of the most recognized Indian actors in Asia.

As we celebrate this milestone at A.M. Jain College, we are reminded that Rajinikanth is more than an actor. He is an emotion. He is a movement. And fifty-one years later, the magic is still alive.

This is your correspondent, reporting live from the Sangamam News Desk. Stay tuned for more stories.`,
      ta: `காலை வணக்கம், யுவா ரஜினி-ஃபைட் சங்கமம் நியூஸின் சிறப்பு பதிப்பிற்கு வரவேற்கிறோம்.

நான் ஏ.எம். ஜெயின் கல்லூரியிலிருந்து நேரடியாக செய்தி வழங்குகிறேன். இங்கு கலாச்சாரத் துறை ஒரு அசாதாரணமான நிகழ்ச்சியை ஏற்பாடு செய்துள்ளது — சூப்பர்ஸ்டார் ரஜினிகாந்தின் ஐம்பத்தொரு புகழ்மிக்க ஆண்டுகளைக் கொண்டாடும் விழா.

1975ஆம் ஆண்டு. பெங்களூரு போக்குவரத்து சேவையில் பணிபுரிந்த சிவாஜி ராவ் கெய்க்வாட் என்ற இளைஞர் — தமிழ் சினிமாவின் போக்கையே மாற்றும் ஒரு முடிவை எடுத்தார். அவர் சென்னை திரைப்பட நிறுவனத்தில் சேர்ந்து, ரஜினிகாந்த் என்ற திரைப்பெயரை ஏற்று, கே. பாலசந்தரின் அபூர்வ ராகங்கள் படத்தில் அறிமுகமானார்.

அதன்பிறகு நடந்தவற்றை யாரும் எதிர்பார்க்கவில்லை. ஆரம்ப காலத்தில் வில்லன் வேடங்களில் நடித்ததிலிருந்து இந்திய சினிமாவின் மறுக்கமுடியாத சூப்பர்ஸ்டாராக உயர்வது வரை, ரஜினிகாந்தின் பயணம் அசாதாரணமானது. அவரது தனித்துவமான பாணி — நாணயம் சுழற்றுவது, சிகரெட் வீசுவது, கண்ணாடி பிடிப்பது — இவை வெறும் பழக்கங்கள் அல்ல. இவை கலாச்சார நிகழ்வுகள்.

ரஜினிகாந்தைத் தனித்துவமாக்குவது அவரது திரைப்பிரசன்னம் மட்டுமல்ல, அவரது தத்துவமும் தான். "நான் ஒரு சாதாரண மனிதன்," என்று அவர் பல நேர்காணல்களில் கூறியிருக்கிறார். ஆனால் கோடிக்கணக்கான ரசிகர்கள் அவரை அதைவிட மிகப்பெரியவராகப் பார்க்கிறார்கள். ஜப்பானில், அவரது முத்து படம் மிகப்பெரிய வெற்றி பெற்று, ஆசியாவில் மிகவும் பிரபலமான இந்திய நடிகர்களில் ஒருவராக அவரை ஆக்கியது.

ஏ.எம். ஜெயின் கல்லூரியில் இந்த மைல்கல்லைக் கொண்டாடும் வேளையில், ரஜினிகாந்த் ஒரு நடிகரை விட மிகப்பெரியவர் என்பதை நினைவுகூர்கிறோம். அவர் ஒரு உணர்வு. அவர் ஒரு இயக்கம். ஐம்பத்தொரு ஆண்டுகள் கழித்தும், அந்த மாயாஜாலம் இன்னும் உயிர்ப்புடன் இருக்கிறது.

உங்கள் செய்தியாளர், சங்கமம் நியூஸ் டெஸ்க்கிலிருந்து நேரடியாகத் தகவல் அளிக்கிறார். மேலும் செய்திகளுக்கு காத்திருங்கள்.`
    }
  },
  {
    id: 2,
    category: { en: 'POLITICS', ta: 'அரசியல்' },
    filterCategory: 'politics',
    headline: {
      en: 'When Rajini Spoke, the Nation Listened',
      ta: 'ரஜினி பேசினார், நாடு செவிமடுத்தது'
    },
    teaser: {
      en: 'His political statements have toppled governments and shaped public opinion. A look at Rajini\'s political influence.',
      ta: 'அவரது அரசியல் அறிக்கைகள் அரசாங்கங்களைக் கவிழ்த்து, பொதுக் கருத்தை வடிவமைத்துள்ளன.'
    },
    wordCount: 290,
    readTime: '~2 mins',
    body: {
      en: `Good morning. This is a political special from the Sangamam News Desk.

When Superstar Rajinikanth speaks about politics, seismic shifts follow. It is a phenomenon that political analysts have studied for decades — the Rajini Effect. And today, as we mark fifty-one years of his presence in public life, it is worth examining this extraordinary influence.

The year was 1996. Tamil Nadu was heading into state elections. In a statement that would be quoted for generations, Rajinikanth declared, "Even God cannot save Tamil Nadu if this government returns to power." Those words, analysts believe, contributed to the ruling party's defeat. That is the weight a single statement from Rajinikanth carries in Indian democracy.

Unlike most celebrities who dabble in politics, Rajinikanth has always maintained a careful distance from electoral politics — until recently. His brief foray into party formation in 2017 generated nationwide attention. Though he eventually stepped back citing health reasons, the mere announcement of his political entry caused stock markets in media companies to fluctuate and television channels to run breaking news for seventy-two consecutive hours.

What makes this influence remarkable is its source. Rajinikanth is not a political strategist. He is not a policy expert. He is an actor. But in India, where cinema and politics share an inseparable bond — especially in Tamil Nadu — the line between reel and real has always been blurry. M.G. Ramachandran became Chief Minister. Jayalalithaa became Chief Minister. Rajinikanth chose not to — and even that choice made headlines.

As one senior journalist noted, "Rajinikanth is the only person in India who wields enormous political power precisely because he has never sought political power."

This is your political correspondent, signing off from the Sangamam News Desk.`,
      ta: `காலை வணக்கம். இது சங்கமம் நியூஸ் டெஸ்க்கின் அரசியல் சிறப்புச் செய்தி.

சூப்பர்ஸ்டார் ரஜினிகாந்த் அரசியலைப் பற்றி பேசும்போது, பூகம்ப மாற்றங்கள் நிகழ்கின்றன. இது அரசியல் ஆய்வாளர்கள் பல தசாப்தங்களாக ஆய்வு செய்த ஒரு நிகழ்வு — ரஜினி விளைவு. இன்று, அவரது ஐம்பத்தொரு ஆண்டு பொது வாழ்க்கையைக் குறிக்கும் இந்த வேளையில், இந்த அசாதாரண செல்வாக்கை ஆராய்வது பொருத்தமானது.

1996ஆம் ஆண்டு. தமிழ்நாடு மாநில தேர்தலை நோக்கிச் சென்றது. தலைமுறைகளுக்குக் மேற்கோள் காட்டப்படும் ஒரு அறிக்கையில், ரஜினிகாந்த் கூறினார், "இந்த அரசாங்கம் மீண்டும் ஆட்சிக்கு வந்தால், கடவுளாலும் தமிழ்நாட்டைக் காப்பாற்ற முடியாது." அந்த வார்த்தைகள் ஆளும் கட்சியின் தோல்விக்கு பங்களித்ததாக ஆய்வாளர்கள் நம்புகிறார்கள். இந்திய ஜனநாயகத்தில் ரஜினிகாந்தின் ஒரு அறிக்கையின் எடை அதுதான்.

அரசியலில் ஈடுபடும் பெரும்பாலான பிரபலங்களைப் போலல்லாமல், ரஜினிகாந்த் எப்போதும் தேர்தல் அரசியலில் இருந்து ஒரு கவனமான தூரத்தை பராமரித்து வந்தார். 2017-ல் அவரது கட்சி உருவாக்க முயற்சி நாடு தழுவிய கவனத்தை ஈர்த்தது. சுகாதார காரணங்களால் அவர் பின்வாங்கினாலும், அவரது அரசியல் நுழைவு அறிவிப்பு மட்டுமே ஊடக நிறுவனங்களின் பங்குச் சந்தைகளை ஊசலாட வைத்தது.

இந்த செல்வாக்கை குறிப்பிடத்தக்கதாக ஆக்குவது அதன் ஆதாரம். ரஜினிகாந்த் ஒரு அரசியல் உத்தியாளர் அல்ல. கொள்கை நிபுணர் அல்ல. ஒரு நடிகர். ஆனால் இந்தியாவில், குறிப்பாக தமிழ்நாட்டில், சினிமாவும் அரசியலும் பிரிக்க முடியாத பிணைப்பைப் பகிர்ந்து கொள்கின்றன. எம்.ஜி.ஆர் முதல்வர் ஆனார். ஜெயலலிதா முதல்வர் ஆனார். ரஜினிகாந்த் ஆகவில்லை — அந்த தேர்வும் தலைப்புச் செய்தியானது.

ஒரு மூத்த பத்திரிகையாளர் குறிப்பிட்டது போல், "ரஜினிகாந்த் இந்தியாவில் அரசியல் அதிகாரத்தை நாடாததால் மட்டுமே பெரும் அரசியல் செல்வாக்கு பெற்ற ஒரே நபர்."

உங்கள் அரசியல் செய்தியாளர், சங்கமம் நியூஸ் டெஸ்க்கிலிருந்து விடைபெறுகிறார்.`
    }
  },
  {
    id: 3,
    category: { en: 'TECH & CINEMA', ta: 'தொழில்நுட்பம் & சினிமா' },
    filterCategory: 'tech-cinema',
    headline: {
      en: 'From 35mm to AI: Rajini\'s Tech Evolution',
      ta: '35mm-லிருந்து AI வரை: ரஜினியின் தொழில்நுட்ப பரிணாமம்'
    },
    teaser: {
      en: 'Motion capture, digital de-aging, AI-driven VFX — how Rajinikanth embraced every era of filmmaking technology.',
      ta: 'மோஷன் கேப்சர், டிஜிட்டல் டி-ஏஜிங், AI VFX — ரஜினிகாந்த் ஒவ்வொரு தொழில்நுட்ப சகாப்தத்தையும் ஏற்றுக்கொண்ட விதம்.'
    },
    wordCount: 275,
    readTime: '~2 mins',
    body: {
      en: `Welcome to the Technology and Cinema section of Sangamam News.

In an industry where many veteran actors struggle to adapt to changing technology, Superstar Rajinikanth has consistently been at the frontier of cinematic innovation. Over fifty-one years, he has evolved with every technological shift — from the analog warmth of 35mm film to the cutting-edge precision of artificial intelligence.

Consider the landmark film Enthiran, released in 2010. Director Shankar and Rajinikanth created a science fiction epic that required visual effects rivaling Hollywood productions. The film featured motion capture technology, advanced CGI, and robotics sequences that had never been attempted in Indian cinema before. The result was a three-hundred-crore blockbuster that proved Indian audiences were ready for world-class visual storytelling.

Then came 2.0 in 2018 — shot entirely in 3D with a visual effects budget exceeding five hundred crore rupees. International VFX studios from seventeen countries worked on the film. Rajinikanth, at the age of sixty-seven, performed motion capture sequences alongside Akshay Kumar, bringing to life a character that was half-human, half-machine.

What is even more remarkable is Rajinikanth's willingness to experiment with AI-driven filmmaking. Recent reports suggest that upcoming productions are exploring digital de-aging technology to present Rajinikanth in younger avatars, alongside AI-generated background scores that adapt to his on-screen performance in real time.

Industry experts point out that Rajinikanth's embrace of technology is not merely commercial — it is philosophical. "He treats every new tool as an opportunity," said one film technology researcher. "That is why he remains relevant across five decades."

This is your technology correspondent, reporting from the Sangamam News Desk.`,
      ta: `சங்கமம் நியூஸின் தொழில்நுட்பம் மற்றும் சினிமா பிரிவிற்கு வரவேற்கிறோம்.

பல மூத்த நடிகர்கள் மாறும் தொழில்நுட்பத்திற்கு ஏற்ப மாறுவதில் சிரமப்படும் தொழிலில், சூப்பர்ஸ்டார் ரஜினிகாந்த் தொடர்ந்து சினிமா புதுமையின் முன்னணியில் இருந்து வருகிறார். ஐம்பத்தொரு ஆண்டுகளில், 35mm படத்தின் அனலாக் சூடிலிருந்து செயற்கை நுண்ணறிவின் அதிநவீன துல்லியம் வரை — ஒவ்வொரு தொழில்நுட்ப மாற்றத்திலும் அவர் பரிணமித்துள்ளார்.

2010-ல் வெளியான எந்திரன் படத்தைக் கருதுங்கள். இயக்குநர் ஷங்கரும் ரஜினிகாந்தும் ஹாலிவுட் தயாரிப்புகளுக்கு நிகரான காட்சி விளைவுகள் தேவைப்படும் ஒரு அறிவியல் புனைகதை காவியத்தை உருவாக்கினர். இந்தப் படத்தில் மோஷன் கேப்சர் தொழில்நுட்பம், மேம்பட்ட CGI, மற்றும் இந்திய சினிமாவில் முன்னெப்போதும் முயற்சிக்கப்படாத ரோபோடிக்ஸ் காட்சிகள் இடம்பெற்றன. முடிவு முந்நூறு கோடி வசூலித்த பிளாக்பஸ்டர்.

பின்னர் 2018-ல் 2.0 வந்தது — முழுவதுமாக 3D-ல் படமாக்கப்பட்டு, ஐநூறு கோடி ரூபாய்க்கு மேல் காட்சி விளைவுகள் பட்ஜெட் கொண்டது. பதினேழு நாடுகளின் சர்வதேச VFX ஸ்டுடியோக்கள் இந்தப் படத்தில் பணிபுரிந்தன. அறுபத்தேழு வயதில் ரஜினிகாந்த், அக்ஷய் குமாருடன் மோஷன் கேப்சர் காட்சிகளை நிகழ்த்தினார்.

இன்னும் குறிப்பிடத்தக்கது ரஜினிகாந்தின் AI-இயக்கப்படும் திரைப்படத் தயாரிப்பில் சோதனை செய்யும் விருப்பம். சமீபத்திய அறிக்கைகள், வரவிருக்கும் தயாரிப்புகள் ரஜினிகாந்தை இளைய அவதாரங்களில் காட்ட டிஜிட்டல் டி-ஏஜிங் தொழில்நுட்பத்தை ஆராய்வதாகக் குறிப்பிடுகின்றன.

தொழில்நுட்ப ஆராய்ச்சியாளர் ஒருவர் கூறியது போல், "அவர் ஒவ்வொரு புதிய கருவியையும் ஒரு வாய்ப்பாகக் கருதுகிறார். அதனால்தான் ஐந்து தசாப்தங்களாக அவர் பொருத்தமானவராக இருக்கிறார்."

உங்கள் தொழில்நுட்ப செய்தியாளர், சங்கமம் நியூஸ் டெஸ்க்கிலிருந்து செய்தி தருகிறார்.`
    }
  },
  {
    id: 4,
    category: { en: 'HUMAN INTEREST', ta: 'மனித ஆர்வம்' },
    filterCategory: 'human-interest',
    headline: {
      en: 'The Bus Conductor Who Inspires Millions',
      ta: 'கோடிக்கணக்கானோரை ஊக்கப்படுத்தும் பஸ் கண்டக்டர்'
    },
    teaser: {
      en: 'Before the fame, before the stardom — there was a humble man collecting bus tickets in Bangalore. His story still moves hearts.',
      ta: 'புகழுக்கு முன், நட்சத்திர அந்தஸ்துக்கு முன் — பெங்களூரில் பஸ் டிக்கெட் வசூலிக்கும் ஒரு எளிய மனிதர் இருந்தார்.'
    },
    wordCount: 280,
    readTime: '~2 mins',
    body: {
      en: `Good morning. This is the Human Interest section, and today's story is perhaps the most powerful one in our special edition.

Before there was a Superstar, there was Shivaji Rao Gaekwad — a Marathi-speaking young man working as a bus conductor for the Bangalore Transport Service. He earned a modest salary. He lived in a small room. His daily routine involved punching tickets, calling out stops, and managing crowds during rush hour.

But inside that bus conductor burned a dream that refused to die. Shivaji Rao was captivated by cinema — not just watching it, but performing it. He joined the Madras Film Institute against the advice of well-meaning friends and family members who told him acting was an unstable profession.

What happened next is the stuff of legend. During his time at the film institute, senior actor Kamal Haasan noticed his raw talent and natural screen presence. The recognition from a peer gave him the confidence to persist. K. Balachander, one of Tamil cinema's most intellectual directors, cast him in Apoorva Raagangal in 1975.

The early years were not glamorous. Rajinikanth played antagonists and supporting characters. He was not considered conventionally handsome by industry standards. But his energy, his timing, and his ability to command every frame he appeared in set him apart. By the early 1980s, he had begun his ascent to the top.

What makes this story eternally relevant is its universal message: your starting point does not define your destination. A bus conductor became the highest-paid actor in Asia. A man with no film connections became the most connected name in Indian entertainment.

This is your human interest correspondent, signing off with hope and inspiration.`,
      ta: `காலை வணக்கம். இது மனித ஆர்வம் பிரிவு, இன்றைய கதை நமது சிறப்பு பதிப்பின் மிக சக்திவாய்ந்த கதையாக இருக்கலாம்.

சூப்பர்ஸ்டார் என்ற பட்டத்திற்கு முன்பு, சிவாஜி ராவ் கெய்க்வாட் இருந்தார் — பெங்களூரு போக்குவரத்து சேவையில் பஸ் நடத்துனராக பணிபுரிந்த ஒரு மராத்தி பேசும் இளைஞர். அவர் சுமாரான சம்பளம் பெற்றார். சிறிய அறையில் வாழ்ந்தார். தினசரி வேலை டிக்கெட் குத்துவது, நிறுத்தங்களை அறிவிப்பது, நெரிசல் நேரத்தில் கூட்டத்தை நிர்வகிப்பது.

ஆனால் அந்த பஸ் நடத்துனருக்குள் அணையாத ஒரு கனவு எரிந்தது. சிவாஜி ராவ் சினிமாவால் கவரப்பட்டார் — பார்ப்பது மட்டுமல்ல, நடிப்பதும். நடிப்பு நிலையற்ற தொழில் என்று கூறிய நல்ல நண்பர்களின் அறிவுரைக்கு எதிராக அவர் சென்னை திரைப்பட நிறுவனத்தில் சேர்ந்தார்.

அதன்பிறகு நடந்தது புராணக்கதை போன்றது. திரைப்பட நிறுவனத்தில் அவர் இருந்த காலத்தில், மூத்த நடிகர் கமல்ஹாசன் அவரது இயல்பான திறமையையும் இயற்கையான திரைப்பிரசன்னத்தையும் கவனித்தார். 1975-ல் கே. பாலசந்தர் அவரை அபூர்வ ராகங்கள் படத்தில் நடிக்க வைத்தார்.

ஆரம்ப ஆண்டுகள் கவர்ச்சிகரமானவை அல்ல. ரஜினிகாந்த் எதிர்நாயகன் மற்றும் துணை கதாபாத்திரங்களில் நடித்தார். ஆனால் அவரது ஆற்றல், நேரம், ஒவ்வொரு ஃப்ரேமையும் ஆட்சி செய்யும் திறன் — அவரை வேறுபடுத்தின. 1980-களின் தொடக்கத்தில், அவர் உச்சிக்கு ஏறத் தொடங்கினார்.

இந்தக் கதையை நிரந்தரமாகப் பொருத்தமானதாக ஆக்குவது அதன் உலகளாவிய செய்தி: உங்கள் தொடக்கப் புள்ளி உங்கள் இலக்கை வரையறுக்காது. ஒரு பஸ் நடத்துனர் ஆசியாவில் அதிக சம்பளம் வாங்கும் நடிகரானார். திரை தொடர்பு இல்லாத ஒருவர் இந்திய பொழுதுபோக்கில் மிகவும் பிரபலமான பெயரானார்.

உங்கள் மனித ஆர்வம் செய்தியாளர், நம்பிக்கையுடனும் ஊக்கத்துடனும் விடைபெறுகிறார்.`
    }
  },
  {
    id: 5,
    category: { en: 'CULTURE', ta: 'கலாச்சாரம்' },
    filterCategory: 'culture',
    headline: {
      en: 'Rajini Style: How One Man Defined Cool',
      ta: 'ரஜினி ஸ்டைல்: ஒரு மனிதன் எப்படி ஸ்டைலை வரையறுத்தார்'
    },
    teaser: {
      en: 'The coin flip. The cigarette toss. The sunglasses catch. How Rajinikanth created a style language that transcends cinema.',
      ta: 'நாணயம் சுழற்றுதல். சிகரெட் வீசுதல். கண்ணாடி பிடித்தல். ரஜினிகாந்த் சினிமாவைக் கடந்த ஒரு ஸ்டைல் மொழியை உருவாக்கிய விதம்.'
    },
    wordCount: 270,
    readTime: '~2 mins',
    body: {
      en: `Good morning, and welcome to the Culture section of Sangamam News.

Style. It is a word that means different things to different people. But in Tamil Nadu — and increasingly across India and the world — the word style has one definitive association: Rajinikanth.

When Rajinikanth flips a cigarette into his mouth, it is not just a physical action. It is a cultural statement. When he flicks his sunglasses and they land perfectly on his face, audiences do not just cheer — they experience a collective moment of joy that transcends language and logic. This is what we call the Rajini Style.

Cultural anthropologists have studied this phenomenon with genuine academic interest. Professor Lakshmi Subramaniam from the University of Madras describes it as "performative identity" — a set of gestures so powerful and so consistently delivered that they become inseparable from the person. "Rajinikanth did not just develop a style," she notes. "He created a vocabulary of cool that India did not previously possess."

The impact extends far beyond cinema halls. The coin flip has been replicated in cricket celebrations. The punch dialogue delivery has influenced political speechmaking. Rajini's mannerisms appear in school plays, college festivals, and corporate presentations. A study by a media research firm estimated that Rajinikanth's style moments generate over two billion social media impressions annually.

What is most fascinating is the longevity. Trends in popular culture typically have a shelf life of five to ten years. Rajinikanth's style has endured for five decades. That is not trend — that is tradition.

As we celebrate at Sangamam, we celebrate not just a man, but a style that became the standard for an entire generation.

This is your culture correspondent, reporting from the Sangamam News Desk.`,
      ta: `காலை வணக்கம், சங்கமம் நியூஸின் கலாச்சாரம் பிரிவிற்கு வரவேற்கிறோம்.

ஸ்டைல். இது வெவ்வேறு மக்களுக்கு வெவ்வேறு அர்த்தங்களைத் தரும் வார்த்தை. ஆனால் தமிழ்நாட்டில் — மேலும் இந்தியா மற்றும் உலகம் முழுவதும் — ஸ்டைல் என்ற வார்த்தைக்கு ஒரே ஒரு உறுதியான தொடர்பு உள்ளது: ரஜினிகாந்த்.

ரஜினிகாந்த் ஒரு சிகரெட்டை தனது வாயில் புரட்டும்போது, அது ஒரு உடல் செயல் மட்டுமல்ல. அது ஒரு கலாச்சார அறிக்கை. அவர் கண்ணாடியை நொடிப்பில் முகத்தில் அணியும்போது, பார்வையாளர்கள் வெறுமனே ஆரவாரிப்பதில்லை — மொழியையும் தர்க்கத்தையும் கடந்த ஒரு கூட்டு மகிழ்ச்சி தருணத்தை அனுபவிக்கிறார்கள். இதைத்தான் நாம் ரஜினி ஸ்டைல் என்று அழைக்கிறோம்.

கலாச்சார மானுடவியலாளர்கள் இந்த நிகழ்வை உண்மையான கல்வி ஆர்வத்துடன் ஆய்வு செய்துள்ளனர். சென்னைப் பல்கலைக்கழகத்தின் பேராசிரியர் லக்ஷ்மி சுப்பிரமணியம் இதை "செயல்திறன் அடையாளம்" என்று விவரிக்கிறார். "ரஜினிகாந்த் ஒரு ஸ்டைலை மட்டும் உருவாக்கவில்லை," என்று அவர் குறிப்பிடுகிறார். "இந்தியா முன்பு கொண்டிராத ஒரு கூல் அகராதியை அவர் உருவாக்கினார்."

தாக்கம் திரையரங்குகளைத் தாண்டி விரிகிறது. நாணயம் புரட்டுதல் கிரிக்கெட் கொண்டாட்டங்களில் பிரதிபலிக்கப்படுகிறது. பஞ்ச் வசனங்கள் அரசியல் பேச்சுக்களை பாதித்துள்ளன. ரஜினியின் பாவனைகள் பள்ளி நாடகங்கள், கல்லூரி விழாக்கள், நிறுவன விளக்கக்காட்சிகளில் தோன்றுகின்றன.

மிகவும் கவர்ச்சிகரமானது நீடித்து நிலைத்தல். பிரபலமான கலாச்சாரத்தில் போக்குகள் பொதுவாக ஐந்து முதல் பத்து ஆண்டுகள் நீடிக்கும். ரஜினிகாந்தின் ஸ்டைல் ஐந்து தசாப்தங்களாக நிலைத்திருக்கிறது. அது போக்கு அல்ல — அது பாரம்பரியம்.

சங்கமத்தில் கொண்டாடும் வேளையில், நாம் ஒரு மனிதரை மட்டுமல்ல, ஒரு முழு தலைமுறைக்கான தரநிலையான ஒரு ஸ்டைலைக் கொண்டாடுகிறோம்.

உங்கள் கலாச்சார செய்தியாளர், சங்கமம் நியூஸ் டெஸ்க்கிலிருந்து செய்தி தருகிறார்.`
    }
  }
];

// ===================================================
//  CORE VARIABLES
// ===================================================
let currentLanguage = 'en';
let activeStoryId = null;
let fontSize = 20;

// ===================================================
//  UTILITIES
// ===================================================
function formatDate() {
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date().toLocaleDateString('en-IN', opts).toUpperCase();
}

// ===================================================
//  RENDER CARDS
// ===================================================
function renderCards() {
  const grid = document.getElementById('story-grid');
  grid.innerHTML = '';

  stories.forEach((story) => {
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-lg story-card-wrapper';
    col.dataset.category = story.filterCategory;
    col.id = `card-wrapper-${story.id}`;

    col.innerHTML = `
      <div class="story-card" id="card-${story.id}" onclick="openModal(${story.id})">
        <div>
          <div class="card-header-row">
            <span class="category-pill">${story.category[currentLanguage]}</span>
            <span class="story-number">STORY 0${story.id}</span>
          </div>
          <h3 class="story-headline">${story.headline[currentLanguage]}</h3>
          <p class="story-teaser">${story.teaser[currentLanguage]}</p>
        </div>
        <div class="card-meta">
          <span>⏱ ${story.readTime} · 📄 ${story.wordCount} words</span>
          <a href="javascript:void(0)" class="read-now">READ NOW →</a>
        </div>
      </div>
    `;

    grid.appendChild(col);
  });
}

// ===================================================
//  LANGUAGE TOGGLE
// ===================================================
function setLanguage(lang) {
  currentLanguage = lang;

  // Update toggle button
  document.getElementById('lang-toggle').textContent =
    lang === 'en' ? '↔ தமிழ்' : '↔ EN';

  // Update all card content
  stories.forEach(story => {
    const card = document.getElementById(`card-${story.id}`);
    if (card) {
      card.querySelector('.story-headline').textContent = story.headline[lang];
      card.querySelector('.story-teaser').textContent = story.teaser[lang];
      card.querySelector('.category-pill').textContent = story.category[lang];
    }
  });

  // If modal is open, swap content live
  if (activeStoryId !== null) {
    const story = stories.find(s => s.id === activeStoryId);
    document.getElementById('modal-headline').textContent = story.headline[lang];
    document.getElementById('modal-category-pill').textContent = story.category[lang];
    setupScrollContent(activeStoryId);
    setTimeout(resetTeleprompter, 120);
  }
}

document.getElementById('lang-toggle').addEventListener('click', function() {
  setLanguage(currentLanguage === 'en' ? 'ta' : 'en');
});

// ===================================================
//  DARK MODE
// ===================================================
document.getElementById('btn-dark').addEventListener('click', function() {
  document.body.classList.toggle('dark');
  this.textContent = document.body.classList.contains('dark') ? '☀ Light' : '🌙 Dark';
});

// ===================================================
//  MODAL OPEN / CLOSE
// ===================================================
  function openModal(storyId) {
    activeStoryId = storyId;
    const story = stories.find(s => s.id === storyId);

    document.getElementById('modal-overlay').classList.add('active');
    document.getElementById('modal-headline').textContent = story.headline[currentLanguage];
    document.getElementById('modal-category-pill').textContent = story.category[currentLanguage];
    document.getElementById('modal-story-badge').textContent = 'STORY 0' + storyId;
    document.body.style.overflow = 'hidden';

    // Setup content + clone, then reset controls
    setupScrollContent(storyId);

    // Slight delay so clone is positioned before reset is called
    setTimeout(resetTeleprompter, 120);
  }

function closeModal() {
  stopTeleprompter();
  activeStoryId = null;
  document.getElementById('modal-overlay').classList.remove('active');
  document.body.style.overflow = '';

  // Reset fullscreen if active
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
  const box = document.getElementById('modal-box');
  box.style.maxWidth = '';
  box.style.maxHeight = '';
  box.style.width = '';
  box.style.height = '';
}

// Close on overlay click (not modal box)
document.getElementById('modal-overlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

document.getElementById('btn-close-modal').addEventListener('click', closeModal);

  /* =============================================
     TELEPROMPTER ENGINE — translateY clone method
     ============================================= */

  let isScrolling = false;
  let rafId = null;
  let timerInterval = null;
  let elapsedSeconds = 0;
  let scrollSpeed = 1.0;
  let scrollY = 0;

  // Base pixels per frame at 1x speed (tuned for ~2 min read at normal pace)
  // 0.55 px/frame at 60fps = ~33px/sec — comfortable reading speed
  const BASE_PX_PER_FRAME = 0.55;

  function setupScrollContent(storyId) {
    const story = stories.find(s => s.id === storyId);
    const viewport = document.getElementById('scroll-viewport');
    const scriptBody = document.getElementById('script-body');

    // Remove clone if exists from previous open
    const oldClone = document.getElementById('script-body-clone');
    if (oldClone) oldClone.remove();

    // Set content with top padding so first line starts centered
    scriptBody.innerHTML = formatScript(story.body[currentLanguage]);
    scriptBody.style.paddingTop = '180px';
    scriptBody.style.paddingBottom = '200px';
    scriptBody.style.transform = 'translateY(0px)';
    scriptBody.style.top = '0px';

    scrollY = 0;
  }

  function scrollStep() {
    if (!isScrolling) return;

    const scriptBody = document.getElementById('script-body');
    if (!scriptBody) return;

    const viewport = document.getElementById('scroll-viewport');
    const contentHeight = scriptBody.offsetHeight;
    const viewportHeight = viewport.offsetHeight;

    // Total scrollable distance = content height - viewport height
    // (when scrollY reaches this, the last line has scrolled into view)
    const maxScroll = contentHeight - viewportHeight;

    if (maxScroll <= 0) {
      // Content shorter than viewport — nothing to scroll
      stopTeleprompter();
      return;
    }

    scrollY += BASE_PX_PER_FRAME * scrollSpeed;

    // STOP when end of content is reached — no loop, no clone
    if (scrollY >= maxScroll) {
      scrollY = maxScroll;
      scriptBody.style.transform = `translateY(-${scrollY}px)`;
      document.getElementById('progress-fill').style.width = '100%';
      document.getElementById('stat-progress').textContent = '100%';
      stopTeleprompter();
      document.getElementById('btn-start').textContent = '✓ DONE';
      document.getElementById('btn-start').disabled = true;
      return;
    }

    scriptBody.style.transform = `translateY(-${scrollY}px)`;

    // Progress = how far through the scrollable distance
    const pct = Math.round((scrollY / maxScroll) * 100);
    document.getElementById('progress-fill').style.width = pct + '%';
    if (document.getElementById('stat-progress')) {
      document.getElementById('stat-progress').textContent = pct + '%';
    }

    updateStatsBar();

    rafId = requestAnimationFrame(scrollStep);
  }

  function startTeleprompter() {
    if (isScrolling) return;
    isScrolling = true;

    rafId = requestAnimationFrame(scrollStep);

    timerInterval = setInterval(updateTimer, 1000);

    document.getElementById('btn-start').disabled = true;
    document.getElementById('btn-start').textContent = '▶ READING...';
    document.getElementById('btn-pause').disabled = false;
  }

  function pauseTeleprompter() {
    if (!isScrolling) return;
    isScrolling = false;
    cancelAnimationFrame(rafId);
    clearInterval(timerInterval);

    document.getElementById('btn-start').disabled = false;
    document.getElementById('btn-start').textContent = '▶ RESUME';
    document.getElementById('btn-pause').disabled = true;
  }

  function stopTeleprompter() {
    isScrolling = false;
    cancelAnimationFrame(rafId);
    clearInterval(timerInterval);
  }

  function resetTeleprompter() {
    stopTeleprompter();
    scrollY = 0;
    elapsedSeconds = 0;

    const scriptBody = document.getElementById('script-body');
    if (scriptBody) scriptBody.style.transform = 'translateY(0px)';

    // Remove clone on reset too (safety)
    const oldClone = document.getElementById('script-body-clone');
    if (oldClone) oldClone.remove();

    document.getElementById('progress-fill').style.width = '0%';
    document.getElementById('timer-display') &&
      (document.getElementById('timer-display').textContent = '00:00 / 02:00');
    document.getElementById('timer-display') &&
      document.getElementById('timer-display').classList.remove('overtime');

    if (document.getElementById('stat-progress'))
      document.getElementById('stat-progress').textContent = '0%';
    if (document.getElementById('stat-timeleft'))
      document.getElementById('stat-timeleft').textContent = '2:00';

    document.getElementById('btn-start').disabled = false;
    document.getElementById('btn-start').textContent = '▶ START';
    document.getElementById('btn-pause').disabled = true;
  }

  function updateTimer() {
    elapsedSeconds++;
    const mins = String(Math.floor(elapsedSeconds / 60)).padStart(2, '0');
    const secs = String(elapsedSeconds % 60).padStart(2, '0');
    const display = document.getElementById('timer-display');
    if (display) {
      display.textContent = `${mins}:${secs} / 02:00`;
      if (elapsedSeconds > 120) display.classList.add('overtime');
    }
    updateStatsBar();
  }

  function updateStatsBar() {
    // Progress %
    const scriptBody = document.getElementById('script-body');
    const viewport = document.getElementById('scroll-viewport');
    if (scriptBody && viewport && scriptBody.offsetHeight > 0) {
      const maxScroll = scriptBody.offsetHeight - viewport.offsetHeight;
      if (maxScroll > 0) {
        const pct = Math.min(Math.round((scrollY / maxScroll) * 100), 100);
        if (document.getElementById('stat-progress')) {
          document.getElementById('stat-progress').textContent = pct + '%';
        }
      }
    }

    // Pace — based on current speed level
    const wpm = wpmMap[scrollSpeed] || 150;
    if (document.getElementById('stat-pace')) {
      document.getElementById('stat-pace').textContent = wpm + ' WPM';
    }

    // Time left
    const remaining = Math.max(0, 120 - elapsedSeconds);
    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;
    if (document.getElementById('stat-timeleft')) {
      document.getElementById('stat-timeleft').textContent =
        mins > 0 ? `${mins}:${String(secs).padStart(2,'0')}` : secs + 's';
    }
  }

// Control buttons
document.getElementById('btn-start').addEventListener('click', startTeleprompter);
document.getElementById('btn-pause').addEventListener('click', pauseTeleprompter);
document.getElementById('btn-reset').addEventListener('click', resetTeleprompter);

// ===================================================
//  SPEED & FONT SLIDERS
// ===================================================

  /* ── SPEED SLIDER ── */
  const speedSlider = document.getElementById('speed-slider');
  const speedLabel = document.getElementById('speed-label');

  const speedMap = {
    1:  0.25,
    2:  0.38,
    3:  0.55,
    4:  0.72,
    5:  0.90,
    6:  1.10,
    7:  1.35,
    8:  1.60,
    9:  1.90,
    10: 2.30
  };

  // WPM map updated to match
  const wpmMap = {
    0.25: 80,
    0.38: 110,
    0.55: 150,
    0.72: 175,
    0.90: 200,
    1.10: 220,
    1.35: 250,
    1.60: 290,
    1.90: 330,
    2.30: 380
  };

  function updateSpeedSlider() {
    const val = parseInt(speedSlider.value);
    scrollSpeed = speedMap[val];
    speedLabel.textContent = 'Lvl ' + val;
    // Update filled track
    const pct = ((val - 1) / 9) * 100;
    speedSlider.style.setProperty('--fill-pct', pct + '%');
    updateStatsBar();
  }

  speedSlider.addEventListener('input', updateSpeedSlider);
  updateSpeedSlider(); // init

  /* ── FONT SIZE SLIDER ── */
  const fontSlider = document.getElementById('font-slider');
  const fontLabel = document.getElementById('font-label');

  function updateFontSlider() {
    const val = parseInt(fontSlider.value);
    fontSize = val;
    fontLabel.textContent = val + 'px';
    // Apply to both original and clone
    const scriptBody = document.getElementById('script-body');
    const clone = document.getElementById('script-body-clone');
    if (scriptBody) scriptBody.style.fontSize = val + 'px';
    if (clone) clone.style.fontSize = val + 'px';
    // Update filled track
    const pct = ((val - 14) / (30 - 14)) * 100;
    fontSlider.style.setProperty('--fill-pct', pct + '%');
  }

  fontSlider.addEventListener('input', updateFontSlider);
  updateFontSlider(); // init

// ===================================================
//  FULLSCREEN
// ===================================================
document.getElementById('btn-fullscreen').addEventListener('click', function() {
  const box = document.getElementById('modal-box');
  if (!document.fullscreenElement) {
    box.requestFullscreen().catch(() => {
      // Fallback: expand modal to fill viewport
      box.style.maxWidth = '100vw';
      box.style.maxHeight = '100vh';
      box.style.width = '100vw';
      box.style.height = '100vh';
    });
    this.textContent = '⛶';
  } else {
    document.exitFullscreen();
    box.style.maxWidth = '';
    box.style.maxHeight = '';
    box.style.width = '';
    box.style.height = '';
    this.textContent = '⛶';
  }
});

// ===================================================
//  CATEGORY FILTER
// ===================================================
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('filter-active'));
    this.classList.add('filter-active');

    const filter = this.dataset.filter;
    document.querySelectorAll('.story-card-wrapper').forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ===================================================
//  KEYBOARD SHORTCUTS
// ===================================================
document.addEventListener('keydown', function(e) {
  if (activeStoryId === null) return;

  // Don't capture keys when typing in participant name
  if (document.activeElement && document.activeElement.id === 'participant-name') return;

  if (e.code === 'Space') {
    e.preventDefault();
    isScrolling ? pauseTeleprompter() : startTeleprompter();
  }
  if (e.code === 'KeyR') resetTeleprompter();
  if (e.code === 'Escape') closeModal();
});

// ===================================================
//  INIT
// ===================================================
document.getElementById('live-date').textContent = formatDate();
renderCards();
