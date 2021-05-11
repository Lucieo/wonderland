import {
  AliceLeaves,
  AliceShrinking,
  BouncingBunny,
  DrinkMe,
  KeyOnDoor,
} from 'animations/alice'
import AliceFalling from 'animations/alice/AliceFalling'
import LapinSvg from 'animations/alice/LapinSvg'
import { Book, ParagraphTypes, Position } from 'data/types'

export const ALICE: Book = {
  slug: 'alice',
  color: 'blue',
  title: 'Alice au Pays des Merveilles',
  homeAnimation: LapinSvg,
  author: 'Lewis Carroll',
  mainImage: '',
  abstract: "Alice, jeune fille rêveuse, durant son cours d'histoire, s'évade dans un monde étrange dans lequel des fleurs chantantes côtoient un cheval volant, une chenille fumeuse, une reine jouant du crocket, ou un lapin tachant de ne pas être en retard.",
  chapters: [
    {
      illustration: 'chapter1.png',
      title: 'Chapitre Premier',
      subtitle: 'Au fond du terrier',
      pages: [
        {
          animation: {
            position: Position.BOTTOM,
            component: BouncingBunny,
          },

          paragraphs: [
            {
              content:
                'Alice, assise auprès de sa sœur sur le gazon, commençait à s’ennuyer de rester là à ne rien faire ; une ou deux fois elle avait jeté les yeux sur le livre que lisait sa sœur ; mais quoi ! pas d’images, pas de dialogues ! « La belle avance, » pensait Alice, « qu’un livre sans images, sans causeries ! »',
            },
            {
              content:
                'Elle s’était mise à réfléchir, (tant bien que mal, car la chaleur du jour l’endormait et la rendait lourde,) se demandant si le plaisir de faire une couronne de marguerites valait bien la peine de se lever et de cueillir les fleurs, quand tout à coup un lapin blanc aux yeux roses passa près d’elle.',
            },
            {
              content:
                'Il n’y avait rien là de bien étonnant, et Alice ne trouva même pas très-extraordinaire d’entendre parler le Lapin qui se disait : « Ah ! j’arriverai trop tard ! » (En y songeant après, il lui sembla bien qu’elle aurait dû s’en étonner, mais sur le moment cela lui avait paru tout naturel.) Cependant, quand le Lapin vint à tirer une montre de son gousset, la regarda, puis se prit à courir de plus belle, Alice sauta sur ses pieds, frappée de cette idée que jamais elle n’avait vu de lapin avec un gousset et une montre. Entraînée par la curiosité elle s’élança sur ses traces à travers le champ, et arriva tout juste à temps pour le voir disparaître dans un large trou au pied d’une haie.',
            },
            {
              content:
                'Un instant après, Alice était à la poursuite du Lapin dans le terrier, sans songer comment elle en sortirait.',
            },
            {
              content:
                'Pendant un bout de chemin le trou allait tout droit comme un tunnel, puis tout à coup il plongeait perpendiculairement d’une façon si brusque qu’Alice se sentit tomber comme dans un puits d’une grande profondeur, avant même d’avoir pensé à se retenir.',
            },
          ],
        },
        {
          animation: {
            position: Position.TOP,
            component: AliceFalling,
          },

          paragraphs: [
            {
              content:
                'De deux choses l’une, ou le puits était vraiment bien profond, ou elle tombait bien doucement ; car elle eut tout le loisir, dans sa chute, de regarder autour d’elle et de se demander avec étonnement ce qu’elle allait devenir. D’abord elle regarda dans le fond du trou pour savoir où elle allait ; mais il y faisait bien trop sombre pour y rien voir. Ensuite elle porta les yeux sur les parois du puits, et s’aperçut qu’elles étaient garnies d’armoires et d’étagères ; çà et là, elle vit pendues à des clous des cartes géographiques et des images. En passant elle prit sur un rayon un pot de confiture portant cette étiquette, « MARMELADE D’ORANGES. » Mais, à son grand regret, le pot était vide : elle n’osait le laisser tomber dans la crainte de tuer quelqu’un ; aussi s’arrangea-t-elle de manière à le déposer en passant dans une des armoires.',
            },
            {
              content:
                '« Certes, » dit Alice, « après une chute pareille je ne me moquerai pas mal de dégringoler l’escalier ! Comme ils vont me trouver brave chez nous ! Je tomberais du haut des toits que je ne ferais pas entendre une plainte. » (Ce qui était bien probable.)',
            },
            {
              content:
                'Tombe, tombe, tombe ! « Cette chute n’en finira donc pas ! Je suis curieuse de savoir combien de milles j’ai déjà faits, » dit-elle tout haut. « Je dois être bien près du centre de la terre. Voyons donc, cela serait à quatre mille milles de profondeur, il me semble. » (Comme vous voyez, Alice avait appris pas mal de choses dans ses leçons ; et bien que ce ne fût pas là une très-bonne occasion de faire parade de son savoir, vu qu’il n’y avait point d’auditeur, cependant c’était un bon exercice que de répéter sa leçon.) « Oui, c’est bien à peu près cela ; mais alors à quel degré de latitude ou de longitude est-ce que je me trouve ? » (Alice n’avait pas la moindre idée de ce que voulait dire latitude ou longitude, mais ces grands mots lui paraissaient beaux et sonores.)',
            },
          ],
        },
        {
          animation: {
            position: Position.BOTTOM,
            component: AliceLeaves,
          },

          paragraphs: [
            {
              content:
                'Bientôt elle reprit : « Si j’allais traverser complétement la terre ? Comme ça serait drôle de se trouver au milieu de gens qui marchent la tête en bas. Aux Antipathies, je crois. » (Elle n’était pas fâchée cette fois qu’il n’y eût personne là pour l’entendre, car ce mot ne lui faisait pas l’effet d’être bien juste.) « Eh mais, j’aurai à leur demander le nom du pays. — Pardon, Madame, est-ce ici la Nouvelle-Zemble ou l’Australie ? » — En même temps elle essaya de faire la révérence. (Quelle idée ! Faire la révérence en l’air ! Dites-moi un peu, comment vous y prendriez-vous ?) « Quelle petite ignorante ! pensera la dame quand je lui ferai cette question. Non, il ne faut pas demander cela ; peut-être le verrai-je écrit quelque part. »',
            },
            {
              content:
                'Tombe, tombe, tombe ! — Donc Alice, faute d’avoir rien de mieux à faire, se remit à se parler : « Dinah remarquera mon absence ce soir, bien sûr. » (Dinah c’était son chat.) « Pourvu qu’on n’oublie pas de lui donner sa jatte de lait à l’heure du thé. Dinah, ma minette, que n’es-tu ici avec moi ? Il n’y a pas de souris dans les airs, j’en ai bien peur ; mais tu pourrais attraper une chauve-souris, et cela ressemble beaucoup à une souris, tu sais. Mais les chats mangent-ils les chauves-souris ? » Ici le sommeil commença à gagner Alice. Elle répétait, à moitié endormie : « Les chats mangent-ils les chauves-souris ? Les chats mangent-ils les chauves-souris ? » Et quelquefois : « Les chauves-souris mangent-elles les chats ? » Car vous comprenez bien que, puisqu’elle ne pouvait répondre ni à l’une ni à l’autre de ces questions, peu importait la manière de les poser. Elle s’assoupissait et commençait à rêver qu’elle se promenait tenant Dinah par la main, lui disant très-sérieusement : « Voyons, Dinah, dis-moi la vérité, as-tu jamais mangé des chauves-souris ? » Quand tout à coup, pouf ! la voilà étendue sur un tas de fagots et de feuilles sèches, — et elle a fini de tomber.',
            },
            {
              content:
                'Alice ne s’était pas fait le moindre mal. Vite elle se remet sur ses pieds et regarde en l’air ; mais tout est noir là-haut. Elle voit devant elle un long passage et le Lapin Blanc qui court à toutes jambes. Il n’y a pas un instant à perdre ; Alice part comme le vent et arrive tout juste à temps pour entendre le Lapin dire, tandis qu’il tourne le coin : « Par ma moustache et mes oreilles, comme il se fait tard ! » Elle n’en était plus qu’à deux pas : mais le coin tourné, le Lapin avait disparu. Elle se trouva alors dans une salle longue et basse, éclairée par une rangée de lampes pendues au plafond.',
            },
          ],
        },
        {
          animation: {
            position: Position.TOP,
            component: KeyOnDoor,
          },
          paragraphs: [
            {
              content:
                'Il y avait des portes tout autour de la salle : ces portes étaient toutes fermées, et, après avoir vainement tenté d’ouvrir celles du côté droit, puis celles du côté gauche, Alice se promena tristement au beau milieu de cette salle, se demandant comment elle en sortirait.',
            },
            {
              content:
                'Tout à coup elle rencontra sur son passage une petite table à trois pieds, en verre massif, et rien dessus qu’une toute petite clef d’or. Alice pensa aussitôt que ce pouvait être celle d’une des portes ; mais hélas ! soit que les serrures fussent trop grandes, soit que la clef fût trop petite, elle ne put toujours en ouvrir aucune.',
            },
            {
              content:
                'Cependant, ayant fait un second tour, elle aperçut un rideau placé très-bas et qu’elle n’avait pas vu d’abord ; par derrière se trouvait encore une petite porte à peu près quinze pouces de haut ; elle essaya la petite clef d’or à la serrure, et, à sa grande joie, il se trouva qu’elle y allait à merveille. Alice ouvrit la porte, et vit qu’elle conduisait dans un étroit passage à peine plus large qu’un trou à rat. Elle s’agenouilla, et, jetant les yeux le long du passage, découvrit le plus ravissant jardin du monde. Oh ! Qu’il lui tardait de sortir de cette salle ténébreuse et d’errer au milieu de ces carrés de fleurs brillantes, de ces fraîches fontaines ! Mais sa tête ne pouvait même pas passer par la porte. « Et quand même ma tête y passerait, » pensait Alice, « à quoi cela servirait-il sans mes épaules ? Oh ! que je voudrais donc avoir la faculté de me fermer comme un télescope ! Ça se pourrait peut-être, si je savais comment m’y prendre. » Il lui était déjà arrivé tant de choses extraordinaires, qu’Alice commençait à croire qu’il n’y en avait guère d’impossibles.',
            },
          ],
        },
        {
          animation: {
            position: Position.BOTTOM,
            component: DrinkMe,
          },
          paragraphs: [
            {
              content:
                'Comme cela n’avançait à rien de passer son temps à attendre à la petite porte, elle retourna vers la table, espérant presque y trouver une autre clef, ou tout au moins quelque grimoire donnant les règles à suivre pour se fermer comme un télescope. Cette fois elle trouva sur la table une petite bouteille (qui certes n’était pas là tout à l’heure). Au cou de cette petite bouteille était attachée une étiquette en papier, avec ces mots « BUVEZ-MOI » admirablement imprimés en grosses lettres.',
            },
            {
              content:
                'C’est bien facile à dire « Buvez-moi, » mais Alice était trop fine pour obéir à l’aveuglette. « Examinons d’abord, » dit-elle, « et voyons s’il y a écrit dessus « Poison » ou non. ». Car elle avait lu dans de jolis petits contes, que des enfants avaient été brûlés, dévorés par des bêtes féroces, et qu’il leur était arrivé d’autres choses très-désagréables, tout cela pour ne s’être pas souvenus des instructions bien simples que leur donnaient leurs parents : par exemple, que le tisonnier chauffé à blanc brûle les mains qui le tiennent trop longtemps ; que si on se fait au doigt une coupure profonde, il saigne d’ordinaire ; et elle n’avait point oublié que si l’on boit immodérément d’une bouteille marquée « Poison » cela ne manque pas de brouiller le cœur tôt ou tard.',
            },
            {
              content:
                'Cependant, comme cette bouteille n’était pas marquée « Poison, » Alice se hasarda à en goûter le contenu, et le trouvant fort bon, (au fait c’était comme un mélange de tarte aux cerises, de crême, d’ananas, de dinde truffée, de nougat, et de rôties au beurre,) elle eut bientôt tout avalé.',
            },
          ],
        },
        {
          animation: {
            position: Position.TOP,
            component: AliceShrinking,
          },

          paragraphs: [
            {
              content:
                '« Je me sens toute drôle, » dit Alice, « on dirait que je rentre en moi-même et que je me ferme comme un télescope. » C’est bien ce qui arrivait en effet. Elle n’avait plus que dix pouces de haut, et un éclair de joie passa sur son visage à la pensée qu’elle était maintenant de la grandeur voulue pour pénétrer par la petite porte dans ce beau jardin. Elle attendit pourtant quelques minutes, pour voir si elle allait rapetisser encore. Cela lui faisait bien un peu peur. « Songez donc, » se disait Alice, « je pourrais bien finir par m’éteindre comme une chandelle. Que deviendrais-je alors ? » Et elle cherchait à s’imaginer l’air que pouvait avoir la flamme d’une chandelle éteinte, car elle ne se rappelait pas avoir jamais rien vu de la sorte.',
            },
            {
              content:
                'Un moment après, voyant qu’il ne se passait plus rien, elle se décida à aller de suite au jardin ; mais hélas, pauvre Alice ! en arrivant à la porte, elle s’aperçut qu’elle avait oublié la petite clef d’or. Elle revint sur ses pas pour la prendre sur la table. Bah ! impossible d’atteindre à la clef qu’elle voyait bien clairement à travers le verre. Elle fit alors tout son possible pour grimper le long d’un des pieds de la table, mais il était trop glissant ; et enfin, épuisée de fatigue, la pauvre enfant s’assit et pleura.',
            },
            {
              content:
                '« Allons, à quoi bon pleurer ainsi, » se dit Alice vivement. « Je vous conseille, Mademoiselle, de cesser tout de suite ! » Elle avait pour habitude de se donner de très-bons conseils (bien qu’elle les suivît rarement), et quelquefois elle se grondait si fort que les larmes lui en venaient aux yeux ; une fois même elle s’était donné des tapes pour avoir triché dans une partie de croquet qu’elle jouait toute seule ; car cette étrange enfant aimait beaucoup à faire deux personnages. « Mais, » pensa la pauvre Alice, « il n’y a plus moyen de faire deux personnages, à présent qu’il me reste à peine de quoi en faire un. »',
            },
          ],
        },
        {
          paragraphs: [
            {
              content:
                'Elle aperçut alors une petite boîte en verre qui était sous la table, l’ouvrit et y trouva un tout petit gâteau sur lequel les mots « MANGEZ-MOI » étaient admirablement tracés avec des raisins de Corinthe. « Tiens, je vais le manger, » dit Alice : « si cela me fait grandir, je pourrai atteindre à la clef ; si cela me fait rapetisser, je pourrai ramper sous la porte ; d’une façon ou de l’autre, je pénétrerai dans le jardin, et alors, arrive que pourra ! »',
            },
            {
              content:
                'Elle mangea donc un petit morceau du gâteau, et, portant sa main sur sa tête, elle se dit tout inquiète : « Lequel est-ce ? Lequel est-ce ? » Elle voulait savoir si elle grandissait ou rapetissait, et fut tout étonnée de rester la même ; franchement, c’est ce qui arrive le plus souvent lorsqu’on mange du gâteau ; mais Alice avait tellement pris l’habitude de s’attendre à des choses extraordinaires, que cela lui paraissait ennuyeux et stupide de vivre comme tout le monde. Aussi elle se remit à l’œuvre, et eut bien vite fait disparaître le gâteau.',
            },
          ],
        },
      ],
    },
    {
      illustration: 'chapter2.png',
      title: 'Chapitre 2',
      subtitle: 'La mare aux larmes',
      pages: [
        {
          paragraphs: [
            {
              content:
                '« De plus très-curieux en plus très-curieux ! » s’écria Alice (sa surprise était si grande qu’elle ne pouvait s’exprimer correctement) : « Voilà que je m’allonge comme le plus grand télescope qui fût jamais ! Adieu mes pieds ! » (Elle venait de baisser les yeux, et ses pieds lui semblaient s’éloigner à perte de vue.) « Oh ! mes pauvres petits pieds ! Qui vous mettra vos bas et vos souliers maintenant, mes mignons ? Quant à moi, je ne le pourrai certainement pas ! Je serai bien trop loin pour m’occuper de vous : arrangez-vous du mieux que vous pourrez. — Il faut cependant que je sois bonne pour eux, » pensa Alice, « sans cela ils refuseront peut-être d’aller du côté que je voudrai. Ah ! je sais ce que je ferai : je leur donnerai une belle paire de bottines à Noël. »',
            },
            {
              content:
                'Puis elle chercha dans son esprit comment elle s’y prendrait. « Il faudra les envoyer par le messager, » pensa-t-elle ; « quelle étrange chose d’envoyer des présents à ses pieds ! Et l’adresse donc ! C’est cela qui sera drôle.',
            },
            {
              content:
                ' À Monsieur Lepiédroit d’Alice, Tapis du foyer, Près le garde-feu. (De la part de Mlle Alice.)',
            },
            { content: 'Oh ! que d’enfantillages je dis là ! »' },
            {
              content:
                'Au même instant, sa tête heurta contre le plafond de la salle : c’est qu’elle avait alors un peu plus de neuf pieds de haut. Vite elle saisit la petite clef d’or et courut à la porte du jardin.',
            },
          ],
        },
        {
          paragraphs: [
            {
              content:
                'Pauvre Alice ! C’est tout ce qu’elle put faire, après s’être étendue de tout son long sur le côté, que de regarder du coin de l’œil dans le jardin. Quant à traverser le passage, il n’y fallait plus songer. Elle s’assit donc, et se remit à pleurer.',
            },
            {
              content:
                '« Quelle honte ! » dit Alice. « Une grande fille comme vous » (« grande » était bien le mot) « pleurer de la sorte ! Allons, finissez, vous dis-je ! » Mais elle continua de pleurer, versant des torrents de larmes, si bien qu’elle se vit à la fin entourée d’une grande mare, profonde d’environ quatre pouces et s’étendant jusqu’au milieu de la salle.',
            },
            {
              content:
                'Quelque temps après, elle entendit un petit bruit de pas dans le lointain ; vite, elle s’essuya les yeux pour voir ce que c’était. C’était le Lapin Blanc, en grande toilette, tenant d’une main une paire de gants paille, et de l’autre un large éventail. Il accourait tout affairé, marmottant entre ses dents : « Oh ! la Duchesse, la Duchesse ! Elle sera dans une belle colère si je l’ai fait attendre ! » Alice se trouvait si malheureuse, qu’elle était disposée à demander secours au premier venu ; ainsi, quand le Lapin fut près d’elle, elle lui dit d’une voix humble et timide, « Je vous en prie, Monsieur — » Le Lapin tressaillit d’épouvante, laissa tomber les gants et l’éventail, se mit à courir à toutes jambes et disparut dans les ténèbres.',
            },
          ],
        },
        {
          paragraphs: [
            {
              content:
                'Alice ramassa les gants et l’éventail, et, comme il faisait très-chaud dans cette salle, elle s’éventa tout en se faisant la conversation : « Que tout est étrange, aujourd’hui ! Hier les choses se passaient comme à l’ordinaire. Peut-être m’a-t-on changée cette nuit ! Voyons, étais-je la même petite fille ce matin en me levant ? — Je crois bien me rappeler que je me suis trouvée un peu différente. — Mais si je ne suis pas la même, qui suis-je donc, je vous prie ? Voilà l’embarras. » Elle se mit à passer en revue dans son esprit toutes les petites filles de son âge qu’elle connaissait, pour voir si elle avait été transformée en l’une d’elles.',
            },
            {
              content:
                '« Bien sûr, je ne suis pas Ada, » dit-elle. « Elle a de longs cheveux bouclés et les miens ne frisent pas du tout. — Assurément je ne suis pas Mabel, car je sais tout plein de choses et Mabel ne sait presque rien ; et puis, du reste, Mabel, c’est Mabel ; Alice c’est Alice ! — Oh ! mais quelle énigme que cela ! — Voyons si je me souviendrai de tout ce que je savais : quatre fois cinq font douze, quatre fois six font treize, quatre fois sept font — je n’arriverai jamais à vingt de ce train-là. Mais peu importe la table de multiplication. Essayons de la Géographie : Londres est la capitale de Paris, Paris la capitale de Rome, et Rome la capitale de — Mais non, ce n’est pas cela, j’en suis bien sûre ! Je dois être changée en Mabel ! — Je vais tâcher de réciter Maître Corbeau. » Elle croisa les mains sur ses genoux comme quand elle disait ses leçons, et se mit à répéter la fable, d’une voix rauque et étrange, et les mots ne se présentaient plus comme autrefois :',
            },
          ],
        },
        {
          paragraphs: [
            {
              content: ' « Maître Corbeau sur un arbre perché,',
              type: ParagraphTypes.QUOTE,
            },
            {
              content: 'Faisait son nid entre des branches ;',
              type: ParagraphTypes.QUOTE,
            },
            {
              content: 'Il avait relevé ses manches,',
              type: ParagraphTypes.QUOTE,
            },
            {
              content: 'Car il était très-affairé.',
              type: ParagraphTypes.QUOTE,
            },
            {
              content: 'Maître Renard, par là passant,',
              type: ParagraphTypes.QUOTE,
            },
            {
              content: 'Lui dit : « Descendez donc, compère ;',
              type: ParagraphTypes.QUOTE,
            },
            {
              content: 'Venez embrasser votre frère. »',
              type: ParagraphTypes.QUOTE,
            },
            {
              content: 'Le Corbeau, le reconnaissant,',
              type: ParagraphTypes.QUOTE,
            },
            {
              content: 'Lui répondit en son ramage :',
              type: ParagraphTypes.QUOTE,
            },
            { content: '« Fromage. » »', type: ParagraphTypes.QUOTE },
          ],
        },
        {
          paragraphs: [
            {
              content:
                '« Je suis bien sûre que ce n’est pas ça du tout, » s’écria la pauvre Alice, et ses yeux se remplirent de larmes. « Ah ! je le vois bien, je ne suis plus Alice, je suis Mabel, et il me faudra aller vivre dans cette vilaine petite maison, où je n’aurai presque pas de jouets pour m’amuser. — Oh ! que de leçons on me fera apprendre ! — Oui, certes, j’y suis bien résolue, si je suis Mabel je resterai ici. Ils auront beau passer la tête là-haut et me crier, « Reviens auprès de nous, ma chérie ! » Je me contenterai de regarder en l’air et de dire, « Dites-moi d’abord qui je suis, et, s’il me plaît d’être cette personne-là, j’irai vous trouver ; sinon, je resterai ici jusqu’à ce que je devienne une autre petite fille. » — Et pourtant, » dit Alice en fondant en larmes, « je donnerais tout au monde pour les voir montrer la tête là-haut ! Je m’ennuie tant d’être ici toute seule. »',
            },
            {
              content:
                'Comme elle disait ces mots, elle fut bien surprise de voir que tout en parlant elle avait mis un des petits gants du Lapin. « Comment ai-je pu mettre ce gant ? » pensa-t-elle. « Je rapetisse donc de nouveau ? » Elle se leva, alla près de la table pour se mesurer, et jugea, autant qu’elle pouvait s’en rendre compte, qu’elle avait environ deux pieds de haut, et continuait de raccourcir rapidement.',
            },
            {
              content:
                'Bientôt elle s’aperçut que l’éventail qu’elle avait à la main en était la cause ; vite elle le lâcha, tout juste à temps pour s’empêcher de disparaître tout à fait.',
            },
          ],
        },
        {
          paragraphs: [
            {
              content:
                '« Je viens de l’échapper belle, » dit Alice, tout émue de ce brusque changement, mais bien aise de voir qu’elle existait encore. « Maintenant, vite au jardin ! » — Elle se hâta de courir vers la petite porte ; mais hélas ! elle s’était refermée et la petite clef d’or se trouvait sur la table de verre, comme tout à l’heure. « Les choses vont de mal en pis, » pensa la pauvre enfant. « Jamais je ne me suis vue si petite, jamais ! Et c’est vraiment par trop fort ! »',
            },
            {
              content:
                'À ces mots son pied glissa, et flac ! La voilà dans l’eau salée jusqu’au menton. Elle se crut d’abord tombée dans la mer. « Dans ce cas je retournerai chez nous en chemin de fer, » se dit-elle.',
            },
            {
              content:
                '(Alice avait été au bord de la mer une fois en sa vie, et se figurait que sur n’importe quel point des côtes se trouvent un grand nombre de cabines pour les baigneurs, des enfants qui font des trous dans le sable avec des pelles en bois, une longue ligne de maisons garnies, et derrière ces maisons une gare de chemin de fer.) Mais elle comprit bientôt qu’elle était dans une mare formée des larmes qu’elle avait pleurées, quand elle avait neuf pieds de haut.',
            },
          ],
        },
        {
          paragraphs: [
            {
              content:
                '« Je voudrais bien n’avoir pas tant pleuré, » dit Alice tout en nageant de côté et d’autre pour tâcher de sortir de là. « Je vais en être punie sans doute, en me noyant dans mes propres larmes. C’est cela qui sera drôle ! Du reste, tout est drôle aujourd’hui. »',
            },
            {
              content:
                'Au même instant elle entendit patauger dans la mare à quelques pas de là, et elle nagea de ce côté pour voir ce que c’était. Elle pensa d’abord que ce devait être un cheval marin ou hippopotame ; puis elle se rappela combien elle était petite maintenant, et découvrit bientôt que c’était tout simplement une souris qui, comme elle, avait glissé dans la mare.',
            },
            {
              content:
                '« Si j’adressais la parole à cette souris ? Tout est si extraordinaire ici qu’il se pourrait bien qu’elle sût parler : dans tous les cas, il n’y a pas de mal à essayer. » Elle commença donc : « Ô Souris, savez-vous comment on pourrait sortir de cette mare ? Je suis bien fatiguée de nager, Ô Souris ! » (Alice pensait que c’était là la bonne manière d’interpeller une souris. Pareille chose ne lui était jamais arrivée, mais elle se souvenait d’avoir vu dans la grammaire latine de son frère : — « La souris, de la souris, à la souris, ô souris. ») La Souris la regarda d’un air inquisiteur ; Alice crut même la voir cligner un de ses petits yeux, mais elle ne dit mot.',
            },
          ],
        },
        {
          paragraphs: [
            {
              content:
                '« Peut-être ne comprend-elle pas cette langue, » dit Alice ; « c’est sans doute une souris étrangère nouvellement débarquée. Je vais essayer de lui parler italien : « Dove è il mio gatto ? » » C’étaient là les premiers mots de son livre de dialogues. La Souris fit un bond hors de l’eau, et parut trembler de tous ses membres. « Oh ! mille pardons ! » s’écria vivement Alice, qui craignait d’avoir fait de la peine au pauvre animal. « J’oubliais que vous n’aimez pas les chats. »',
            },
            {
              content:
                '« Aimer les chats ! » cria la Souris d’une voix perçante et colère. « Et vous, les aimeriez-vous si vous étiez à ma place ? »',
            },
            {
              content:
                '« Non, sans doute, » dit Alice d’une voix caressante, pour l’apaiser. « Ne vous fâchez pas. Pourtant je voudrais bien vous montrer Dinah, notre chatte. Oh ! si vous la voyiez, je suis sûre que vous prendriez de l’affection pour les chats. Dinah est si douce et si gentille. » Tout en nageant nonchalamment dans la mare et parlant moitié à part soi, moitié à la Souris, Alice continua : « Elle se tient si gentiment auprès du feu à faire son rouet, à se lécher les pattes, et à se débarbouiller ;',
            },
          ],
        },
        {
          paragraphs: [
            {
              content:
                'son poil est si doux à caresser ; et comme elle attrape bien les souris ! — Oh ! pardon ! » dit encore Alice, car cette fois le poil de la Souris s’était tout hérissé, et on voyait bien qu’elle était fâchée tout de bon. « Nous n’en parlerons plus si cela vous fait de la peine. »',
            },
            {
              content:
                '« Nous ! dites-vous, » s’écria la Souris, en tremblant de la tête à la queue. « Comme si moi je parlais jamais de pareilles choses ! Dans notre famille on a toujours détesté les chats, viles créatures sans foi ni loi. Que je ne vous en entende plus parler ! »',
            },
            {
              content:
                '« Eh bien non, » dit Alice, qui avait hâte de changer la conversation. « Est-ce que — est-ce que vous aimez les chiens ? » La Souris ne répondit pas, et Alice dit vivement : « Il y a tout près de chez nous un petit chien bien mignon que je voudrais vous montrer ! C’est un petit terrier aux yeux vifs, avec de longs poils bruns frisés ! Il rapporte très-bien ; il se tient sur ses deux pattes de derrière, et fait le beau pour avoir à manger. Enfin il fait tant de tours que j’en oublie plus de la moitié ! Il appartient à un fermier qui ne le donnerait pas pour mille francs, tant il lui est utile ; il tue tous les rats et aussi — Oh ! » reprit Alice d’un ton chagrin, « voilà que je vous ai encore offensée ! » En effet, la Souris s’éloignait en nageant de toutes ses forces, si bien que l’eau de la mare en était tout agitée.',
            },
          ],
        },
        {
          paragraphs: [
            {
              content:
                'Alice la rappela doucement : « Ma petite Souris ! Revenez, je vous en prie, nous ne parlerons plus ni de chien ni de chat, puisque vous ne les aimez pas ! »',
            },
            {
              content:
                'À ces mots la Souris fit volte-face, et se rapprocha tout doucement ; elle était toute pâle (de colère, pensait Alice). La Souris dit d’une voix basse et tremblante : « Gagnons la rive, je vous conterai mon histoire, et vous verrez pourquoi je hais les chats et les chiens. »',
            },
            {
              content:
                'Il était grand temps de s’en aller, car la mare se couvrait d’oiseaux et de toutes sortes d’animaux qui y étaient tombés. Il y avait un canard, un dodo, un lory, un aiglon, et d’autres bêtes extraordinaires. Alice prit les devants, et toute la troupe nagea vers la rive.',
            },
          ],
        },
      ],
    },
  ],
}
