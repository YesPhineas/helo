import React from 'react'
import {connect} from 'react-redux'
import './form.css'
import axios from 'axios'

class Form extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            image_url: '',
            content: '',
            img_display: 'data:image/jpeg;base64,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',
            img_default: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAZAAA/+4AJkFkb2JlAGTAAAAAAQMAFQQDBgoNAAALYQAAEyAAAB3/AAAlJv/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8IAEQgB2wHbAwERAAIRAQMRAf/EAPEAAQACAwEBAQEAAAAAAAAAAAAGBwQFCAMCAQkBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAAABQIFAgYCAQUAAAAAAAAAAQMEBQIGEFARMRIwFCCgIRMVFjI1JYBBIiMkEQABAgIFBgcJDAgHAAAAAAABAgMRBAAhMRITQVFhIhQFEFBxgZEyIyChQlJygiQ0pDCx0WKSQ1Nzo3S01KCiwmOTs8MV8MHSM4NEVBIAAQMEAwEAAAAAAAAAAAAAIQBQESAwYGEQoLABEwEAAQMDAwMFAQEBAQAAAAABEQAhMVBBYRAgUTBxoaDwgZHRscHh8f/aAAwDAQACEQMRAAAB/v4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8MVPY9VAAAAAAAAAAAAAAAAAAAAAAAAAAHyVZecTuPtcs8TxPQt3PTfNAAAAAAAAAAAAAAAAAAAAAAAADRM0ZrlbU6TabAAxEpfXLPluSdQAAAAAAAAAAAAAAAAAAAAAABo2ec9ceoc9/dQAABX9xD7i8M9gAAAAAAAAAAAAAAAAAAAAAB+HOOuEvmshbYnQAAACqbz2q2DNgAAAAAAAAAAAAAAAAAAAAAVneecs+m6mvP9LYnQAAADnXXDorPcAAAAAAAAAAAAAAAAAAAAADn7XHoHPYDn7XHayy1oDTpqLLjz0y1FU3nK5qVtAAAAAAAAAAAAAAAAAAAAACgdcb+z2A4l35I9Z9FlTcfTCTftXBnpbs6jSs1rcXJOoAAAAAAAAAAAAAAAAAAAAAoHXG/s9gOI9+TQWS+a0iWBNwi40VnTuO9vTqPgofXG+89gAAAAAAAAAAAAAAAAAAAABQOuN/Z7AcR78mgsuDPSp9c5ZNYCRqzp3He3p1GElN65XjnsAAAAAAAAAAAAAAAAAAAAAKA1xv/PYDiTfkj9mSWlnpBbiPWDp7He3Z1EEuMZLEnQAAAAAAAAAAAAAAAAAAAAAUjrja2eu4URRnV2ACJMxW56Kz2zFFAa43xnr7qAAAAAAAAAAAAAAAAAAAAANelG65dBZ7AAACprz/AEtidI6zWOud4Z7AAAAAAAAAAAAAAAAAAAAAACsbzxi150AAAFTXnipELnovPb3UAAAAAAAAAAAAAAAAAAAAAACo7ywC6J1+wAARpmgdcej899ooAAAAAAAAAAAAAAAAAAAAAAAESZqTXLfTU8m90uMkUuYLcbVq6M9fUAAAAAAAAAAAAAAAAAAAAAAAAAGoSDXGlTIJW1M5v0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9oACAEBAAEFAvKEmugQprorzczIikLsYNATy7JYfU5JyCshAVWToPirqjwldb5nWxk2UjRmUhItY1A65i6lY2Ajo0vCsgi5TkLWUQrh7m9yvMJB+jGtWRlckummmjR0JuBQlU7fmV0V8u2C9Sl0zM3bdCydv3B3nSueH7xC3Zb5Nllt1SBs423I4o+OFwW/3gt+4O86SxfXrjy2VL5S6MbqSi/diLsbVN/tEEPtEEPtEEH9yx6jSKuFNIILouUsLvae/GQjrvIrLLc/6p/GWMzlQRHUbe0pdeiQhJCMKLY/JPpyD+GFln/FYSKXvsLLV5MMssj1rxlf2gaxtakY5eu3ldvSypOJNp2D8WX+rwMtSsfbLLR/0yOMr+0EBxfxaqSiClvI0LS0w7pfSYsv9Xg5U9pvZCejfLE/468cZYtJUIrKt1Kbq92mSfUP18LLL+KwuRz20Pazft4fLLwa10kwd0P2eDuEi3yv1eCH1eCH1eCH1eCEvabapvAIQb00EEWyWFzrVSMkknSinljpsm8bW+6UiJHoXBb/AHgt+4O8wlJBKMZ2qwVVUy65IX5FC3Z7vaOhcFv94Ie5kq0S7m7JRNOhKjL523e7qirn41kZVF4pGVZxadDF5dD9mzQYt8xk4VlK09jcdvm1vJuEZ6IXBPmRiuTjkg5uuHQFdwzUqbC0zqUoooTpzRywZPAtaMQoDslkKLLjiDe3YdsKaaaC8qH/AP/aAAgBAgABBQLyouo1/qcPrnnh+bj/AP/aAAgBAwABBQLyoXIf5GOI4jiNKhyGuZ7D1qGnj4gjzLc+iZagjzD8jMgR9IyBHrl1QLAyBH0tjy0/WrGrQFUORDkQ5ENQR+CrYtssLfE98OJjTQEDLQU7Y05bT4D3H9gRg8Kdsactp3xPcFsC3PcU7Y05btVie+HLwU7YHtTtllXg0IcSHEhxIcSB0gtPAe+XF6dEyBHgfoKcvMgR9EyBGPyPMDIFV0NdB+WZmWo9SHIalhqORDUzHHN+JDiOI0Lyov8A/9oACAECAgY/AvYQ/9oACAEDAgY/AuqQXXVgIuRtx9cNIZ1tGk5pPEPUPpdZsimG+LsvRWnI4GEer/8A/9oACAEBAQY/Av0QmBeaB0uI+GmotKvJUD73G5JIAAiSagALSTmoW5aM66KuzN1gH66BveaDSMszsTCrFXUsiGcOPxdXyopGf3tEms/701/NW1SufdjoYQP6hpeZ3kpKhZel/wBpLwI6KRk57aUixGNe+ymxhjmNAzvjd6knKtCVMuQ8bDc1HOYgUvyj6XIdZvquo8ts6w5bOM8eaXAWIQmtxxXitpqie8KFLfom7Er04fnEQMy7DJ1RoolSGsZ8f9h4BS4/ux1WuavT3RafabebNqHEhQ5a7DTbNyOradRrCXKyDV9A6THzVW56CR3sNnmwrDDqk4aFq8V5NWC5HmOjjFyaf6qKkoHWccPUbTpPeFL285kITAlqWBIvpB9XZNiBCs+Ee+EtNIS22gXUIQIJSMwA9xvpg1OoHZvQqXCxt6FqdNqe9T+y70vJeQrCl3HOtEWMLPhRHUVlszcXxNQFpps7alDd0pGKhZhgwW6MmJMGpOjnoiZ3YgMTcslN1tvUDyWgLkD4L6AKjly02Ge7OfbikFQu7RdtBFV19MKxl9y26XEJyVTe1es8ynWKaq8Ru1PRQB1XpctBt/OseA9D4+X4w4uLSDB6cJZSRaG7XlW+Lq+dRu8mExMgPv5xeHZt/wDGg9MeDbpHs59uCiEm7tF2wg1XX0wqOWmwz3Zz7cUgqF3aLtoIquvphWMvuTbiNSRnbQOqG3VQcTkHYO6wzJ4ulJA1sy2GHBkICdqfj5SIJ7jHam0S+9W7qlNoDhLsK03lNIUGZgCwmEe/TD3q5hPtwAeDbi0vjOQ0hZS4MuQ09e9mnPy9PXvZpz8vT172ac/L0dTIbzbYmzcwnXZWbKEwcQVxBk3rW4jqmj/923zLzN7C2fBlJpNyGJi3obul+tFOeyiXmHEutLEUrQYg/AQeHaANeTdSuOXDdIbcHyik81JN4mKsLDX5bJLSifKuR4t3tOGuGPd0YsxqdDaIdxvKP/vmxzB9YHQOAJSCVEwAAiSTYAMpNAspZl4iITMOEL50tocunlhS9Ms9lGGO0cRqOYm1EdIFGJLFwcbE7S5iXcNlx3qXkRjchbSV9K2nacb5nBuYOF+9dvXsXRZR7RPugaOwlj754Z1n6SVfSPKw1XTzKpMs/RTV4aEutoq+Ug8W70UbfRO+Zon3u43l9/nPxDnBOb1S9hGSeZSgWXjFN6ChWlaS4i7TEmZhx5WS8qoQ8VIglPNRG7JtRmJGc9HwndfDU5Ui5GxKlGBGmNJqU8Fl0hEbcNQC246cNQ4H/v7v4eV4SM4IpvMaZPv7T8HFu9pU2jJ9Q+42f5ncby+/zn4hzg3ruW8EvOwmZePhqTh1cy2Ux0GimnkKbcQbq0LEFA0lMRxDSWV7TFagm8WO0SlMbSVDojScmUVoW7Bs+MhpKWkK85KI8D/3938PK8L7v0bLrnyEFX+VJ93x3mm/4aFK/q8WrT1W569z7UgOd+aTDuN5R/8AfNnpfWR0jgQ8ytTbrZvIWkwINE/3HdUlPuJEA6oISehbL4tzQFA83JsSYCQm4xEXoWFdiIgZkjhe0z7pGnsJYe+OGbrgp4CWRpxjBY/hXqMEiCphTkwrzzdQedpCeLZPejNTkssNrUIaovYjCvNcj00l5tFjzYJHirscR5iwRw40zKJW6bVhbrRVCy9guIvGGenqPtM5+Yp6j7TOfmKeo+0zn5inqPtM5+Ypibqbwn24kslxxaXxmBdWspcGTIabFPyWHvBEQCp+bQJi7aLmOAh5OVNEssNpaaQIJQgQA+Ek9PDJbmYMbq0l2GR12yP1LFfnUbaRUhpCW0DMlCQlPeHFr0s6ItvIKDozKGlKq6P7knTdQt3sFGpON4JT8SZRCGn3HbpHs59uCiEm7tF2wg1XX0wqOWmwz3Zz7cUgqF3aLtoIquvphWMvA7NOQJAuso+lePUR8Oij2+5uKnX1OBgqFZvHtnhoJ1Rz8X7TLp9OlxqwqLzYrLXlptTpqy0ElOG5PNC6CuozATlr+fTDWGW3PD3DbpHs59uCiEm7tF2wg1XX0wqOWi2N6rEvNSyVXnFi7jBu3VyTAypy5KBSkra3ZKnkuozRsMw/DzRyVoabSENtpCEITYlKRAAcg4w2/d3ZTySFqSk4YfIsWlVWG+M+Wmw75Bl5hs4e0KTdBIqhMJ+bX8bq8lApJCkkRBBiCDYQRaO7vzLmuR2bCa3nPJTkGk1UXOhhEnKlQSt0CqCc1m0TELTUKIlpZFxtHylKyrWfCWrjLt0XXgNSYbgHRmBMO0RoNCZJZnZMGOGlJdTC3Wlo4jZzlB56XJ+Vdl3BUpTXaIjlvIVccRya1Bcn5cRyOqwD9sEUiJyVI0TDX+qmvPyaeWYaj0Xommq6uZV4rDZP67mGjv0LW6JJTSTVigYqxyurCWGv8V02rfD5mXlG8WQtSgT++eVrucghy0ShtKUISIJQgBKUjMEioDjX0mVYe+MttJXzL646aG4mYl/qnoj7ZLtKpyahpDR/ZFO0mJxegKaQD9kT36RTJocV4z5U/wDquEo71AlCQlIsSkAAcgFQ/RRP/9oACAEBAwE/IfpCMXaV4cA/pnQkh5kGMbnfV0TOWAEoWAUsSWseQWX4HNcBkT3H4NFceRm94kP8qFfeQH6f9ak5cZk/++FOYds+5l3ItYmluoYWqN3qkQBLbmMEJ8JbOporziDn7ZZZAylSeRSsCFo32ownKUQUZTPzUinEbMru+OGJ8Fg2S5UqexUt0eEZU/RUqvhyzN8Fgb9tQapYFAssjdy7C4KIQka5od5Bm2xegzRwJOLAHosvHnCMNL7XbEkqD8mCQWfQb0wiTOnlAoAVGAC6q2AKCpeR3sIsN2Yvi1BhJogQCSA38IWEsX5D1GTgnZJuHo3NpK85EF1i+dxEUDciW2NFiRyONORG2iBgJAlxRdcLJvD7hcGz8ulyfAeqS8E7IdksX5D1GTgnZJuHo3dJm2trzBCHg07xcozeE/8AZPPYJ4GvyUoIXwROwnBLhXZHjbTIeDqIIJsRzy6ZMZbjtk+8CIiUE72N8K/zEwnkCEYRs9TGRaCYReJDir2ub7pEbK/ZpuxO/b25B5447GBK3DeznsEdDoKfLoAlQ2KwN+L4klaeJjeikxgXIsDBtl5tX2I8C+ORM198Mf8A5B5TSIqoAdlseCR/PU3CfYCguQGncZm9gHskfnTflSz/ANh3PSsASlLJfPZe/uRpUBNDgQBN7C981mFPUSpjm7DGC5eNFUC5Ob3vXPb7JbCHskNN8QQ9wX/Gm7KR/wCIcPd9RJH0wJ9m4PNpXan2vQFbI/Dhq7zdYBkgCV8FbU0f7aq1yH+Xb7B5gcfAs0TZBnl79R01DV2BxMnsZgBHI8PPZJ6ATTBm8PhLJhLNALCLbuKZcnOwFQQMqA2Ca0mxzNuqCoggdl8eSQ/HUlWHPP4JX4r8rBr5cWmzEXvROZtje5qMGB7Md5z+EdVh8COpCcGsmTBHaIIIJOCXKu2PG3mB8kELVBGzWN4gYkMhur/MUr5QlWVXesl5IhATKxk9qoK+BhhYC2m3NGOyveFsDkqXWWGICZieusQyvo3J8B6pLwTsh2SxfkPUZOCdkm4UpEmLCFg3iSVsVqZUwBJ5UEq3YNkafAeX+TLHdF91wBxKwXYQQfJwbPRXJ8B6pLwTsh2R1AyRnBYCsgCXhMhaoIk3LLmi0xPLQHPNIKDbAag1knTRiChRuDfDenychbaQ9pdl3J0RDhkyAQ3746ZDBb7pdzEfNXgPn1uEyS2ELTFig0D91beScv6gg1LarA7LEkAfPxFSLg8hRRK/0qKZ/wARAMkw/coKS4Lk8Je0DKG6T9kaOWIycvYto8FSIc2dO2XPZU1VpxTiZ1juKbUiGwaKjxEhgcihauMkwKA41Ua84hC0Yyz4FLqQuDF7Fr+akWmwW/YfxT4wOfcVEePFI4OvKF2YHHBoSmwQ3gQH0on/2gAIAQIDAT8h+lCirVPUtUeNVsVPfPmk1LHpDSb6hgoaT0hp04p6DSelk07bsKioahqGoqOwp01x3zU9BmnsdVPV1E9z56NHR1Ft3x2PUzTnTTsmpalqWpaGmew86e3v6I0nV8aeNJ6I0lY1Eajx6ONTmrNRUPWGoKnxq8tTU1L9KL//2gAIAQMDAT8h+lCQYqcGKk5ajXvqDFSKAcampl0ATuic07qbOWorBNHpT8rUoG7lU9nPpTXM1E505QUYOk9zNT2c+l+vTsDs3KBHYVTFm9eVWeoypTpq9vZk6iUrKhLHaJuVjpu/sye/QKFXNXpYoQx0/wBuzfpuQ7Mnv0vVMUZopl0/26uKx1EydMVwTSy904oI00KDJPVTPaqhFC7Oax1vg05JIpyl6M9zNT2c9FCaG7T5rmans59Ge5mvytSE9zNbGXoIyqFTtQAQakFIx4o865qkqFIdIN2rEHPQjUaC+lF//9oADAMBAAIRAxEAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEgAAAAAAAAAAAAAAAAAAAAAAAAAADGGSMAAAAAAAAAAAAAAAAAAAAAAAAD4gAAlgAAAAAAAAAAAAAAAAAAAAAAAfEAAACEAAAAAAAAAAAAAAAAAAAAAAAboAAAAIAAAAAAAAAAAAAAAAAAAAAAAgZAAAAAgAAAAAAAAAAAAAAAAAAAAACAAIAaEBYAAAAAAAAAAAAAAAAAAAAAAABgVOMB4AAAAAAAAAAAAAAAAAAAAACABjbcMCAAAAAAAAAAAAAAAAAAAAAACABj28MA0AAAAAAAAAAAAAAAAAAAAAAADg9gMAEAAAAAAAAAAAAAAAAAAAAAAoDAALUCEAAAAAAAAAAAAAAAAAAAAABQAAADIcgAAAAAAAAAAAAAAAAAAAAAAPAAAAZ6gAAAAAAAAAAAAAAAAAAAAAADqAAAdYAAAAAAAAAAAAAAAAAAAAAAAAIrLkwAAAAAAAAAAAAAAAAAAAAAAAAAAJb2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2gAIAQEDAT8Q+kIUCgAKqwAXVWwBS0CiSuSSQCRq1gtyy6TxCPfV37AzOMIbVVACWnt6jEpxWCM3ci1LIQL7II1t2As2CwJFPBqJyB4kBIRsEKAS7pQ72hgg5TRzJsOIBnmZuLWjem7tvXAEt7YbQvQTMqdgjICVgSEndqC7KZ9lfJGyamrl7WCkREKUuAlKuwViWEy+4SJtUAgsKxdYCTYTRm9xTnuDYQC5cwmuI1fVPGC00lBdRmMNHEpIBSSVAGSRCg1ETwJSPuIjrAiEkoyLmsz6ihsykk0G91J/AYBl3Vlu+iHjsDAAScRGpmgZPPXAunA1IEANPTsgSPqYAJVsFMb5lkOfGdeDJL0tLO2RZnDDFIpfIDpVCVbuDE9LSkZ5ICBjE3IIJaRCiCx9hELoEWMDpxFeGpTSJOEoj3HAoCRJxSBhbLnR8BulUJV+wcSv8gOlUJVu4MT0tz6HT8J/LQJMo6bBIJfA4SIIJgAI3dbXYPNPpw5wmFQREvAmCZMk0IK9lRRRyzgBQ7XERtBcssw2znIl/gOTRr0AJUnEJgw6AidQ3hY5GwJdtJigGLhUjMeHRCgCabdJk9oetfsb2EpQkUA9djBsAdAU6sRF4iAFVgooWCrNbBcvJgF4GKU1Lyi9YzdpMx9si8P/AEtRD9kNfvL7BNYqKKk3JCG6d+s/yBiVUDca5KlLCK3XAbfly03yUu+zJTz3TZs7g2IACBZYMKUDV4zxzDmEiVJSlpG2qC2JI+MDYFQFrBgQIsknaZWO0xEnenEuTiGlJnjqxvMTabzFCsnMlocT3TQQHN0JIATRIBEdLetKPCMSOQkERRGoVyTK68tUkySxIwMAQE0sIs3O0YAcsTAhjsBRAmJFkTneH7NNidZFBYLYX39v2NpQgIpPHYw7iPRDmyp8SFlSgVIIpQ6fp2JTBqDIeAvXC81DCLiogLEOgaxUQFLuCUN0bdTyJcIRzXmT2Ojwpm3Asd/xxjTWstFCBZCO3GEXVaDBaT1pX3Euw9SVdzciRKAZlKADsooooURLwLguTBNIClUas8UCcCYJKFFNrwgJVOymLKqKr1kMjUHqASmb4GSKwnczgFClgONN31wuQkEgp5IOlSXJ3KzQK4WVL9H4DdKoSr9g4lf5AdKoSrdwYnTMiJa6fmdDS7WipHAjCyyIgABC7T2HYJCNyBQOS7yKFDWci7fISbAl6I+A3SqEq/YOJXMWIIbybYkdBFQfBMVEjMrQDANDdGxOn8IDUHiAgRZRiJMgXdwZLsT0vcIYAWEFBqpfZE5SECid6w9ST0gTyiEssyQWeSukVCKAJIDIkGV4WCEShkuGwADUYYzyDxokkMALzbNTAIXG5XLFSmDwVCpgA6iQK2BeabDWwPCaSdg32mgoEUYwUUSgSHmrV5ypKAH0UwjF6DL92dWLKOWL4m1KJe3cRhNeSvcJqBvEO0VYKCcYVe1X0DkxwAaqgHIApgAMUA2hT5pqE8wpm5NmEtCm2FAMgmWEuLIP3V56lXJYCGPAZvMWpFuyGBkf9nzKvcOTctxQrAH0on//2gAIAQIDAT8Q+lCG5qDnNRMFSr2VLzUWiJnUwXFftpT3TGKNtNwxqISxTZb0oPathqH7q2HFQXMelFZxQh404y0peOkFnFQXMel+zTi0+yeNqXNuyoU3LU+BWOrvFCHTbAdhg6pKA4pYJ6DPqWaz03Z2GD26LeKAMULSZoZJ6Z/js2abiPYYPbpYlM0oKEEdM/x1M1lpueyYOma4sUEHXPqJo5009qSGOojHbVLN6QuYrPWwlpwwzQhD0YLOKguY6BLFPZp8FnFQXMejBZxXgxWPOowWcU78PQBcVIY3pVZdSEVOTNPjXBUNQ0NUGadurBTHSnU6U+lF/9oACAEDAwE/EPpCZPJQjjWLdc1skfbzX3prmafD4VuU/fNCoNFytTMmktBb7fusXd7kCBJTDhancWojmVvlvH/KACDHokJLVUd7bUGYTD7+aNMA9M+NtKzGGnWUy17+9PsefTPcu/TrDaf/AHsEoMUsljXJ8P8AK5Ph/lcnw/ynoi9j/KAmB8Wf4UIJMdZvINRDxpv7h/vZ8h6gTY96xy1Q+M1b3maye/8AOplOKV5zpuf4f97PkP8AeiqlENKSlabcO1Sfh0yfbB2f8v8Aum2/Yt2fIf705S3pFQ5oAna9TQx0yfbB1UJ8FG5500/C/wDf/ez5D0FUmaJFhUcwB1ye/wDOszzaoHm+m4hkoiG/VWReuD5f7XB8v9rg+X+1wfL/AGr5Y1YX50AIMdWlUAEGDTQRYaR8c/f79H7HnqeMilVzONPj7Gou1+fR+x5o0iwVfgff7aACDGoeF/7q5j8v76BE5UWlFNhGpDXz5rOu+21Bgo0LgVzFI5T91gmfamyEFXpZaALGNVwwaXxJXK0bq1s37qIsY+lE/9k='
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleImage = this.handleImage.bind(this)
        this.handleAddPost = this.handleAddPost.bind(this)
    }

    handleInput(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleImage(e){
        this.setState({
            image_url: e.target.value,
            img_display: e.target.value
        })
    }

    handleAddPost(){
        axios.post(`/api/posts/${this.props.user.author_id}`, {
            content: this.state.content
        }).then(()=>{
            this.getPosts()
        }).catch(err => console.log(`hey, look, an error ${err}`))
    }

    render(){
        return(
            <div className='form-every'>
                <div className='form-box'>
                    <section className='form-new-post'>
                        <h1 className='form-new-post-text'>New Post</h1>
                    </section>
                    
                    <section className='form-title'>
                        <p className='form-title-text'>Title:</p>
                        < input name='title' onChange={this.handleInput} className='form-title-input' />
                    </section>
                    <section className='form-image' >
                        <img className='form-image-display' src={this.state.img_display} alt=''/>
                    </section>
                    <section className='form-image-and-content' >
                        <p className='form-image-text' >Image URL:</p>
                        <input name='image_url' onChange={this.handleImage} className='form-image-input' />
                        <p className='form-content-text' >Content:</p>
                        <textarea name='content' className='form-content-input' onChange={this.handleInput} ></textarea>
                    </section>
                    <section className='form-post' >
                        <button onClick={this.handleAddPost} >Post</button>
                    </section>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {user} = reduxState
    return {user}
}

export default connect(mapStateToProps)(Form)