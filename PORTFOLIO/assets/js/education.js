AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Advanced React",
    cardImage: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~PR6J5WW5M4L4/CERTIFICATE_LANDING_PAGE~PR6J5WW5M4L4.jpeg",
    moocLink: "https://coursera.org/share/91c1f1598de17cf1de73d87b7465b4ec",
  },
  {
    title: "Algorithmic Thinking (Part 1)",
    cardImage: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~D2BRDBDN6Y7K/CERTIFICATE_LANDING_PAGE~D2BRDBDN6Y7K.jpeg",
    moocLink: "https://coursera.org/share/8476a66ee633a1470608156cfdf320d0",
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    cardImage: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~S2C4FY78N6TS/CERTIFICATE_LANDING_PAGE~S2C4FY78N6TS.jpeg",
    moocLink: "https://coursera.org/share/f06673493ae17bbcb94c139c67d2fd0c",
  },
  {
    title: "Data Structures",
    cardImage: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~WGF7SLRL264H/CERTIFICATE_LANDING_PAGE~WGF7SLRL264H.jpeg",
    moocLink: "https://coursera.org/share/a795871a244f50eca9b904439d8bd3b4",
  },
  {
    title: "HTML, CSS, and Javascript for Web Developers",
    cardImage: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~NCUQSXWBP36N/CERTIFICATE_LANDING_PAGE~NCUQSXWBP36N.jpeg",
    moocLink: "https://coursera.org/share/6f606c92b175676ea4d7b7f68df60d7c",
  },
  {
    title: "React Basics",
    cardImage: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~SXB39EGF55QJ/CERTIFICATE_LANDING_PAGE~SXB39EGF55QJ.jpeg",
    moocLink: "https://coursera.org/share/81481aec7f01263fb5926a9f88faa0d1",
  },
  {
    title: "Programming with JavaScript",
    cardImage: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~JFUA7U7TTKCL/CERTIFICATE_LANDING_PAGE~JFUA7U7TTKCL.jpeg",
    moocLink: "https://coursera.org/share/c43805df8c18ac5837fdf41caa7d3dab",
  },
  {
    title: "C for Everyone: Programming Fundamentals",
    cardImage: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~8E9ZPWN8Z4TM/CERTIFICATE_LANDING_PAGE~8E9ZPWN8Z4TM.jpeg",
    moocLink: "https://coursera.org/share/009382a2972a58368ac0ade9df119c5c",
  },
  {
    title: "Algorithmic Thinking (Part 2)",
    cardImage: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~HDEA4LRY7NCV/CERTIFICATE_LANDING_PAGE~HDEA4LRY7NCV.jpeg",
    moocLink: "https://coursera.org/share/9cd454e7655270ff2a89a63fe0a02f6d",
  },
  {
    title: "Introduction to Front-End Development",
    cardImage: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~Z5GF54HE2YRM/CERTIFICATE_LANDING_PAGE~Z5GF54HE2YRM.jpeg",
    moocLink: "https://coursera.org/share/8c542c93de53b72fd5f615954b599575",
  },
  {
    title: "St. Xavier's High School",
    cardImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUYFxcZGRwdGRoaGiMiIBogIhogHB0dIBodICwjHSAqICIdJDYkKS0vMzMzGSI4PjgwPSwyMy8BCwsLDw4PHhISHjQpIykyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyLzIyMjIyMjIyMjIyMjIyMv/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAEsQAAIBAgMEBQcJAwoGAwEAAAECEQADBBIhBTFBUQYTImFxMoGRobHB0RQjQlJygrLh8DNikgcVFiQ0Q1OiwtJUY3OD4vFEo8OT/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDBAAFBv/EACsRAAMAAQMEAQQBBAMAAAAAAAABAhEDEiEEMUFRMhMUImGhQnGB8DORwf/aAAwDAQACEQMRAD8Aruwdo27GIVxlK5dROiZsgOYrqcpM5lkwPGrxirAxoSw3zbZfm0bcs2yrRc0zjKwIMMRIBA1ryPDI5ZFRC7GFywO1Ikr+8eXGn/RvamIwLrcGbq2E5CdGAJVVIglQHkERI3+OhMnUeSPHbPxFq4y9VcUKzGchgqvYZjlEBTlidxzcZmvQ9mdBb/V3FuXQCrk21ygoQQGE8VIPFeW7hTfo/wBM8Ni1LFhaZVU9sgamQy66NBA3bwRoKqvSDp5irN67at3bV22CkPk3ZpYgcCABGs7+O4K6eeAYbXKPU8BYFtAonwLFoJ3gE6xNEk15h0W6f2ERxdQqSZUpBDCOIJkEecagCNBTHE/ymWR5Fi6/mj2iI89SbWe486d0uEX2uHFeZ3f5TbjaW8Pl1+kVJ9AuCuW6c45/Iw4H3G9wYUPqSvIy6XUfg9HatAV5m+3drXNwy+CqPblNQsNqP5V5l+/HsLV33EIouivyesKSN9Q3sdbXfdtjxcD2mvKDsHFP+0xBP3p9iLXadEz9K8x/i97xUn1MlF0L8s9IudIcMnlXk8xn2A0j2301wYNrLczlLmYhImOruLoGI4kDz1WU6H2QZJJ+6vtyk0UvRnDgaqT948o3Aih9ws9ii6KUu4diunmGQlrK3cxPaXKSrc5CzDfvDXnO6uL/APKUo8jDt94x+LLXCbGsiPmlP2hJ9Jo2xhLa+Sir4KB7KV9Q/A66PTXcVn+UDFP+zw48wJ/CWrX9I9rv5Nor/wBs/wCpF9tWjZ4gnw99JsXjLzXL6dayBFZkAUQVSPJaJJ3hp3TpRV01kaenjOEkK2G2LvlMyA94X/8AQ+yhv6K45vLvBR9oe6376tmCK9QVuXcxNvO5ZoZVYTMjcAZg91Itj4+3bS8xb50KoTMRJQx1ek6SxBPiJoN57lJjCePAtfodlPzuLUaSSWbdz1caeau/6L4FZL4ktlIByoDqZIE5W5H0UfgbDv1aFTnRzauGDBRpM5ogxDDzjnU+1LN1hiFt27pLXUKlUjQLBKloBiN+7UUuWU2Snhv/AHIINk7PTJPWuHAYMMwWCYk5QIE+0c6Ku4HC2mtIcGpe5qQzTkEgfSJzHWYHI1rFbNxFwWyLXV5LZ7LOoUnOSFYKTvABJGkmjNt2VuNaa5cs28oBYvcgoZBOQ6TuI1gbjwo8gexY595/8CsXs+0gXJatpqfJQDh3CoAgrW0+kGEAH9YtHX6LZuH7s0nudKMMuod28LbAelwBUtSc0CK/EcFa1SbavSO3ZFssrHrFzLw005+I3TSa902H0LY87E+oL76XYxtyLgwpbiLSG4cwGVozTxEQfVQfR7aZxa3S4gKygAEidJ8aJxaAPAA1XlStYY08ov5xSbgwPcNfUKGxWOKKWW3cc6AKBBJOg8qPTRqmQORFD45rgtsbYzOB2RIEnlJgDxr2kfNV3PKuleLsXbouCSSWQopmMpzM0eAbUGNBv0lNszZy3Xe3n6ow3cc3k5cxMDLvJ0Oh4QDLtnA3rTO9zLbUEwtvVSwORisgEAHdu1jzpsM6oFYMVOvEknTWB9GdDM7xx3Utbd3JacqeDMVhWYmEyjyVk7liFOu6YnvmaVuu4ezx5062ntBvIIzPMlgAJ01lo1EBYJ4HhupTacqJiTw8NQNeH5VKv0XfKR3ZMAGSFAHiTyHId/d30LirnbbfvqN8SfZ6RrXMnfB11pMZ7ihQzhJE5WngY0IO/gd3po+zee49tm7TGMrZiNVJg5pG4yNdJoxujt5OsBDyCT1arIywWnOToCsjceVWHDbPt35OHYWitpQEJDLlClkIJMxJ1nWQd2kitRF40nkV7AweGOW21y4S7BRlQZZMxMyeEbt55VZ7fRTC3EVgGIaGB8nT7MCN+oIBqnbYtLavFluK4BQvkI0aQ08mBMbuM16Bsjbdq4pUMCyIWaAdQIlgNYGogT3cKhqZ+SZo0muZpLgg2V0XtWkhwHMnXWIzMV055SAT3UzTZVld1q2Puj4UvPS3DcDcbwSPxEVLsrpFbv3DbRHBCF5bLuBUblJ+sKk8vll0sLCGGFtKM8ADtcB3CiYoYnItxwJPabxIHq3VTX6b3pIFhQRoZzN65WhM5C2Xsisiqlsjb2IvW8SzKiNbRDbIX6TFhqCxkaCkn8/49vpx4BR/po7DsnpAFbAqh7BxeMfFWhduMULHMMxg9hju3b4oDalm81+7Fx8udiAWJiSdBrurtq9nLL8HpRbhUOJxVu3HWXESd2ZgJ5xJ1qg9HdnsmLsuzzDNw/5bCrB0w2dcvi11aOSpOoU6TE+yi0kck/IyfbuGG+8h+zLfhBrMTt+xbt27jMxS6DkIQ6xv3xHniqenRW8d6v52A9pphtnZuXDYW04ByZuIPGd4Ou+u4DtbeEM7XT/DWyfm7p05IPbcpbd6bYXNcZcKXNwENnumIOrAKFYLJAmImKUrstOCD0flUjYBQN0UyuUsCvSruPto9KHsW7JXC2Qt20CBq2VdCEPkyO0e7fStunWLPkJaT7Nv/wAmonbd3DJZwgui6T1QKdVlOgVQQc5gbxupUdo4QbsPeb7dxV/CDRVP0DEllTaWJuYJr5v3BcFu43ZVQoKlo/u5I051Un2zi38q7eb/ALhUf5fhVy2fj0Oz2upZVVW3dItE5gcpYEEwJmNdONUr+lMeTawieFuT62rluecA/FdyfYaXLmKtLcBdZbMGJeBkbU5p0mN9B4rZz9bdChVAu3AIHDOY03Uz2F0pu3cVat50yO8Mq2wARlJ3xO8DjW8cLnXXQotAda/lZifKPARQp1L5GhTYsTZbcXPm09lZc2RbgkiT30d1d7/Etjwtn3tUd2xcjW83mRR7jQ3P2PsleBztrAJdtYV3u2reW1HzrZZlU3HjEbu+lRw2EUa4q19xGf8ADWumWb5NgmUScrDdP0F5eFVMLePA+iPbTxpulnJC9Xa8YPSOiz2PnVs3Gc9lmlCoG8CAfA0wxg7YPcaqn8noYNezbyF9R/OrXjPKXz1HVna8F9KtyyXvCNNu2eaKf8opV0l2ymGQM2vGBqYHITqSYEc2FH7LebNr7C+yKrXT3Yt/E21FkqAJz5niR6IEc5G/0+vD/FP9HzupONRr9nmGLx73HuNcY6E/NlgeBGiyQRwiT5PE60vwmIVkOYlDPIR4DdO71imGKsW2PV27guratwbxTKvlKIygZsgLBQx8dw1WXCpRcoVTBzkz5RJjs790DTlU75ZaODHdbjkZSIBMk+UYnXnpPhQDPlbUdmd35URachssCJ3+IynXjP641BiG7gSZ9438tZ81Jgt3Rt5JJkAGY8N+/dHxrC1saFWuHiwcATyGmo7+ND5wePd3cTXIA/QooQtOHwOOf6F0qyggsGOhG7Xjv3096M7Du2Hu3LiZFFl1EgCSYI7+B9NVZtt4iBmuXDyl219dOuieJa4MSX/w1Ak8Sxnx0FZrmsNnoRctpAeJ2WDcMHKCASB4096LYJLfXsz5V6rKWO5QSZPcNKhdO15hR2EUCxfaJ/Zrr9r86hvb4NL05XKXIpv7LwrMXOJSD9W27eynXRPDYa3ddrVxrj9XB+bKgKWBO+eIFUbatl0cBCYM+7nVo/k3Rs98tPkIBPezz7Kq4/DOSH1G72tFzxTnq7nZ+i+89xqlKmp3b9aumMb5q54H21TT5TeJqBqhDPZaHqr5kCerB07z4c6WIm/xNN9lj5m93vbFKk95rhkMNiWwcRb+93fRPKhcSg6xvH3mj9g/t08G/CaBvftG83soZClyG7FX5+3978BqL+UK5cUWmR3ACtmCsQDqN8HX86m2L+3t/e/Aa304WVH/AE29tPD5RPUWX/g87fFs30C3ixPuq83EzYHB71+bnsmCNRxqvpZhUGYiSeA00J4irRiF/qmFH7nvFW1mtvBDQVb+WK12eh3m4fG4/wAa0+zrcT1ak8219s0atc3NxrMqZtxPoD6b2JsYHKcsIF5QCq+rSquNmyYN0HwM1duk4+ZwR7l/BSppzjQeQ3HvXurVFNSYdSFVFk6M2Y2WU39m+P8AM9ef2tmJ1YaHPZncAN3frXpPR7+xEH/m+1qpttT1G8fs90d3OaEU02dUJpZNbEwAt4qwwQiLq6kjjI4Hvpvjh8/d/wCo3tmhsGwF+z25PW29NPrCi9qCMRd+1/pFJqttrJXQlJvBFUV3dUoqJ6kaGEbaUHCYUkkCSNDH0T8Krz2kztqSMqkds75M8fCrJj5+RWCOFz3PSHEEhtw1TmeDeHfWjT7GPU7jLobAu3QNxUe7n4VY8efI8fdVb6JmL7DmvuNWHankj7QqOsvyKaHZFz2I84e34EehiKKuCQQdxBB8+lURNvXLXUgMgtK+VxILNmkksurIg01A3me6iL/S4wVYKCd5tP5ECTBdIeSI3DyhpNevocwuPCPB6hY1aX7Yn6ZdCLjXEuYRFyBVTqwdZLEFteGssSeFefbW2e+HuG3dKm4DDKGzFdAZPDXh3V6b0h6R3HsN8nxFtHZkyhfLCle2GJGhzaSN08ImvJ8RjWcsbhLMScxJ1JJk6eml1ZU+A6bbObTk7tRI0POd4M7/AI1JiSJMGN458Oe6hVMajQtoPDcT7R6aIdRExO7ukCJ14GPRUjQjez9nG7cFtTlLmEJHlaGe1uA0799NLSm0MltswG8hWImdYKnUd/uiusFtDDRAVlPaPkifJIA35WAk6EemaNxm2sCzktZuyd8PlHgAukDd5qtMrBFvkCxDW7lu3kAUZt31dDI7/GutmbOu5g6AsguQxDQPJmDG7fpQrLdTq0cGN/nMemBE+NWvY2mFP714n0IBWGntk9GFvtZ4Zy6gOY3+JPAaamj7R/q1z966o9ABpcT2m8aPB/qy990n0Ais5tZX9qKvWLIns9x3nv8ACrB0EUTiGAjW2voVjw+1Vc2sfnBqfIHtNWTotnt2lNtAxudY7lid6lktqDuWQq7+ZrTMO4wjJVqbyywY7Eotlnd8iRqxBMdqNw131UW2jggSflLNJJ7NpvaaseNS46G31Vk2yFkOxM7ifJbg0+ighsVBEWcEOZNrNxP1lPCOPA0Z6R+Rq6hL40v8s5we1MMuEuXU617YuhW7IDTlB0BMRBFJR0mwQ8mzcY/vXAPwirXawlwKES5atqN627KQTPlRlABiB92iUtXP+JuDdOVQvv0o/aMH3M4+SEfRvbaXb5RcP1UW3fMXYnSBEMANZ9VV2500YH+z2FPejN/qFXG80YtgSzFMEe0xkntsdTXlGPt+QQZkewCknTl200DU1KUqky+dFOk9y/iUtFbQUhyclrLuUnfJNNemZ0/7Z/FVa6A2Iv2m523Pq51Zel6E6ASSgA/iNS1EptJFtF1UtvuVW03kAACCT/lPdVoxh/quG+wPdVXt4K7mBZTAB+kOXjVpxixhcMP3B7q7VpOeBtGWr5QIprLu6sUVq5uNZ0zY0b6Tf2fB+b8NJyw6wbyMj8W5rT3btgPh8ICSIE6dwFLBgVnNmaYI4cYnh3VeNSUsMyVpVTyiydGf7Gw77nvqm2EHV+SD2W107/PV26NpGGYD61zf4VVcNYXLEes/GuWok2ctN1x6N4Zz1lowI623+Id1HbYEYm74r+BaFRAHtwAIuJ+IUbtsf1m53hPwilu1RSIcsEFcMa6itMKUcKxknAJG8XeH2mHvquZLrMDlbcRxHEczVkf+wt3XR+MfGloannUcrBCtJU85N9HkZMQCwgEEanu8asO1D2D3EUhwBi9bPf7qd7Tb5tvN7aW63cjacKOEUzpTi2t3VAVSDbUyZ+sw4EDlSNtpP9VP4fzpr0z8u0eds+pvzquAHfI9FenoatLTSTPI6nTl6rbXkMu45iBukd2h81CSCJ0yjfGmp4D9cK7ImADGmulbWyWBInIhHrnUjmYPhFGqqnyTmUuwPmLHXfw0/UUxRCbYnfqp8+vvqB8LxBPnom0pCtAaAQwJB4jv8PVSMeVyQbOwN26wW0CzbzGgQfWZtyjxrMbhSWGQtcAEFogEyfJ5ryJ1r0zBWreH2e7YY2wblu27pcYy2ZcpAkjKxJgd6mqO2FEA3r7W2YEhApIUZiIAVYAkHQePGq7MIjuyxnjMN1rA5gAsjUTxptg7XV2LSTPauGYje1K7J0puTFu0P3J9JmvNy8YPaSW7cAK+p8T7aZD9jaH2z/mpNabSnDmLdrutT6daXAyeWKWsI7Z2BmOBj1UczOqWkVT1UNm8omSZHkgk+cEa68KCQ6UcU8mFJ7Kzp3c8p4d9bOky2/7GPq4mkl2Dth4e4OsLaK2Xq0gCNTrA0B1A5mNeFH4q24YAgqOPaA5HhcB9XH0rcCg6wg25AViIOvCJBI8fRU7NncZQYFzKwgwcqanszPomt6prgxfQhL2ToSpBzExyZ9w3jc4jvphavIyy1xU3NAzE5dN4KgjfuiklzC3DOVIGRwOwYEOOdrl30yxmFXKq5VEWxOg1OZNPHQ11V+x5059EWO0xeL45cEonxDGvLtpnyREaH/T3ivTnuZ8Vjp3dRbWO42yY9dVhtlWSe2rMQSB2mHsIry3qKNR5Nz0auFtJugAHyi3B3WW0/h+NWfpKO2vgPa1Lei2FtpfGRYi0w3k6SumpqfpNtnE2roS0tsp1eY51JIImdZ5RwqGo1qVwaNKXprkDK6U32lh36iwMpkKARG4wN9V2x0gx9wkK1sQpYwnARJ3E8a6G1dostthc0umLZW2mvZLDfHAE+agtGxn1E57DRMK/1G/hNdPgrkfs29BpaTtE3BaOJYMVL6W1ACiBmnTjp5qEa7iimf5XeIhzA7JhFdid+nkEfeFFdPTC+pS8Frx+zrjWrCquYoIaCNNO/fQw2Rd+p6x8arj4a8QS2Lugdb1cda2m+WYQYGh512+w7nVJee5e6tlLOxckIu8EgDMQd8xoN9F9NXkRdTxwi7bKwhtWyjkSST4SAI793rpGNllJBuWgJ3l49UUrxXRO2jp1hfq2ygXJLSzEgLoZWdNSI1oG7sS2lq3cyA9Zbu3AJY5QihgCc2vf4Uy6dvyL9dy2PzYshgXxVkQQSBcWdDPE11tPE4S5cNz5XaEgAgHNu5QeVIzsq0Cw6tYGbnNvLdS3maTuh83mo3Ymx7N24Ua3bHzYZdB2vnLiZhzkKDTfbNIH3DbOnx2BXfip8Lb/AO2oX2tgB/e3G8Fj2gV0mBs5RDICRr81qAq9o7tSTqBPdwNF/IrYKlesYEyAtkCQGytJJ3cdROh7qP26B9wwYdJMELRthLrKZnsDUzMzm3/ChP55w30cNebxn400u4AK5GXEEESCuWBmiAJ5Zzv3ZOM6QjCKCZS7lzcWUTIG/TcCSNJGm8030JEetYFa27bDplwjoSwUMx3ZjE6in2N8hvClV+0otABcrK6ETcDkiTJ0g9/nFM8X5D/ZPsrPqSpeEaNJtrLKh0kwr3Dh1QScrb9APJMk8qr+OwNy0wVwskSCDIIq0bedlt23R8pV3WYnQjdAHdVdxMuZLkjWBkYwOA4Vp0bxKMXURm2wJm0gHx76nwN4KWzNClddN8HTdx/OtfJO9z4Wz8als2ym5HMzMqOUaa6fnVt6M3069BL4btyWJQEGNI3TEb5rt8SHLE7ig8YTQejNQjXbkjsNpuHKpbWIuFoKKJRkJ7iBx8QPSaVvIVLyF4PHtb7EMyDWFJ8nvAMeBIMTR13pOogfI0uQNWY67yY8ngCBSkYy7aFtrR3gzIBkjTjwg0oxTMzszxmJk6gUypryLemm8lxto2XyW9Bpri+yI+rbA9C1UV6R4pmCi7vYL5C8TH1atW1W/aeBHqistRtPQjUVZwLEbs+arBfw7FAFEkWwoH3arY3Rz0ovpKzdYSlx1gAEByBu5A0rQ01jkMTZd2PJA+8KZ9VhNOsvLmEAgEHcOIg8a8wOMutPbZu6Zr0vZ6hbFoHf1dsGeZA95qyqtJZ75JKlqvC4wE/zlgbXaL6kEZuraTunUJW26XYEbnc8dLTco+kBypb0hS0yqty6tqc0Egmd26KQrg8GB2savmtN8aK6in4Dekk+5b8V0owyojm1fysJUhEEjnq80txPS3Dkgql8jTQFRy39rzemtbUGFWzZt3LjBeqUIwtk5hA10GhPI0nB2eP728fC38VpVr36DWlPHI/2VjBeuY28FKB1twp3iFKcPCg+J8T7aK2RewwsYi5aN5lAQPIUNpJGUQBOvHupVa6Q4JJDLfcyTLlAdeHZI9lZqVVTaNMXETyywdHf2x/6Z/Etc9IMXat35uEhTbK6CTqvgRWdFdsWL9xxatMhVJLM0yCwERQPTBAz3JjQJ7B8aVJqsMfeqTcmYDpDh7ZJzsxIIELliY11Da6eHOa4sbfwqFSBcZheN0xABYoUjKEACweHGqiyRUVtwTyrSnS7MytpvlF1vdKLLXHuG3dLOgtmCsZIIKgaRJMk753RuoV9v2DnjDsA63FImABcADgAPpu80nnVZDLzHproOvMemu30vI22f0WVekqiALJIFzrAC5gPJMxmPM6bq5PSb5tbfydOrUEKpuEiCZKmQZWY7JkaCq71i/WHprXWp9YUHdP2dtleiyXultx3V2tWy6xlYwSImI7HCTHKTQj9JHBIFq0JzE9ga5hDbgN40NJusXnXLuDBnQce6uTYtNIff0ov6+QMwhiAe0AIAOuoioz0ixHB4gQInQct9J1up9b1H4Vo317/AEV3Icr2NH27iD/en0D30M+07x33G9A+FBHELyb1fGuTiRyNdgGV7Cmx1z/Eb0/ConxVz/Ef+I0OcSPq+uoXxXd66KkR0vYZh77NctqXYy6zLHn416Hd7QPePaK8y2bdIvIYBGdQZHNgJHfXpqbl8B7KTVWMFOnrdkQYwzbU/vz6QTQtu2WMCi8QIt68GT2BfbSjo/ine4Q5nsSNAIMjkO+m0IV0kwdRbhZXcZHZ1w8U87/Ca5OzW+vb9J+FH5N1cQK3/bQmec+pv2L32XrrcTzSfdUK7NEj5xd/1Dz8aZvuqDifGqLp5JPXoQYichAXRGP/AKoEo1NNp24S7wmCB4QarcVkaw8F3XCLPhcHatOgZTdulgVBfIkzIyx2jB4kDwp5tbaHV20fqVa5cGZkLAhRz7SnNMjQAbjXOEwd6V6zE543qCTm7hmAre1dndc2t/q9FBVVBMiTAOcEb5iKs5WOxOXXgQnpLcBGXDWATuHVyZ8xGvmp30m25dsOiIqhsgNx4JBcjVVzGNNDxPaFZg+j9qwyu11yQZAcKsmRO8k6xU20th2brtdZMTcZ4JFsgLooWRmXu50vYdK2iPobtzF3sUtu5cm3lZmXIo3QBBVQfKK8acY7GXrl26UxLpld1VCqMvZ3eUJ1PfzoLZvVYIPeNi7bAyqxdsz6t5IAAUaiTHIVLf2RZu3OtS42bUkAqwGaW1WMw3kwTQbyUmGhRitoXLigYmylwDUFGyOOZEEqT3ERVW2hgerLKDMGAfrDep84g+erviNjsfJuLPepHsJpHtzDG1ctrIzdXb1G6QCoiRPAVLlDOc9x9tyyGW2pE5bdsUpXBpyp5ts6/wAI9U0sBrDlnpqVhDHZVsLhr4Aibij1LVTxezZuMYhcx14aD8qt+C0wt3vu+xVpTj0tTdyXHZBnILLBLQS0KCQBMgTwqmm2m2S1ZTSQb/J5YCPdI420497fCiekq5rl0fY/CtT9Eraq13LPkWwZ3fS3VDt0/OXfFfwig3mxoSmCj4K0cqEk6mKBxHvp9hLZ6u19pvfUI2W1y7atBkBuMVUloUHmxjQbta0TyzJaxKECvRCOI3VA1uGIkGCRI3HWJB4ipVXf6fNzp2iM0yTrRyPq+Nb64fVb1fGpfk8Ww+hJJG/kTz8KMs7MmGNy0soCZPk6kQe/dXbULWrSFxvjTRtfD41nWngp85FNH2akoDiLWrHcQcvYc5jru0394phZ2HZP/wA2xuMAAGe4Q9FQhK135K+ikfRH8X5Vw14yRlGn73dPKvVbHRHAwJx6E/up/wCVVra3R/DJcuxioRCkMbZ1lEM92pjzUdiF+tRSziDMZR6fyrk3jyHrppjcNZRkKXTdENOVYg9iBLCDvoW9lCzlaDxLD2AUNqHWpT5BDcNZkkT+t9bZOIPEj0VPbT5sn9b6V8FJe42ki4rcAynQcAwOtemA6CvMrrQp8K9ItPKgmpavY1dOkqYrxIGS5O4Gf4bp+FV3YONdsTkZiykMF3cNRuHIVYdorKX1/cu+zP76o1i02fcRIfXvKHcfGKfQ4eSPWN8I9B6vx8/5Co3SBr5o9m6vPktMw4+cmpkshRJ3wN4BG/j+uFa/r4MDhF3Yrx08aguOgPlD0/8AlVQLgKUIAkgnjr4VGyr3frlzrvuH6O2L2WXE2xccgEMuXSOBiI076qeWrBsGCNdwY7u9dPWDSrHKq3HXXRjw79PVUm8vJb+lFuZAQQ7F58ksySh5pC9k99SNhkY/S1iYukZtAstlAnQCki487yG/gPxqVdpd8eaudDrA/wANhraaJbRZ0kM06/vRNRPewqP1bsmfdDXLrQeRJOUHxNI7m3AgMP2iCBHA8Dv01oK1s0FCWMEqWEjQxrBbmf1NKO2vHJYOktizbtIwtoG61QSoIMZWJGY+Apjex+Hu2VQ3xbJVO1mKEEAaT8KpO0dtG5ZS0wBKEdqdTAKiRzg7+6lOb/1RkFaiXCPQ8BbRXn5aLigE5etVsx3CeMfCgcdbV73ZghbqDeTuVREmZGvOqfh1LsFUan1d55CrPs63l6tC2Y9YpJ+8OfdU9R4RTRe/wP8AazSx+0Pw0ua7cUqLVvPnBVvm+sIkgAAZTlJ4EQeRo3aTa/ePspdjLzpauG27oYlshImBpJHKT6ayx8kbtT4sFwu0LwIzsygtJQlVSM2U6MJklSJnnroabP5Bt6KCpXSdJHLSqldshCVV9W367/JYb+IINWPBX86EkQwMMN0HKOHCd/nq2qsLKM/T0qbmiydGyfnfuD1NzNLdtNL3e9o9UUx6M+TdP74/D+dLNsN27n/VPvrPLzRqaSnArsIItJxUuTG7WSIPGlFy52DoJjQycy94P6OtObA+cHg34ar+JA0B3AcB3Voh8mbWnMoCVO1Mzrrr31I9ljJUwIynznd6vVWALIImcwGoHiNQe6pb2UrIzDc3DlO/N38vRVjG14MaQkTuKj1NRF0/NHX+6HqagmuAiZM5hIIHAGDmnv3RUzscm/XJAGn1o5V2BH3ALQzMACASY13a8zT7ZjopyNqxbygFOXhAlZ5+eKSdcwhdGAYECOIniNeNN06kOjW2IkEsDEL2WBEROrRxotZFWPJbNn7YZQVcOTJIlg8AfRzA6seXMx30s2ltB+sdvJRwkiBCt2lXMpEiQO+DHOaFGKAVTbZ2ZtWz7lAABAkCeBGpjXeTNKbgYXpuMJyL2mMzplG+DpHqrlT7CrSlco4u22VvKU6MBl01HCSBy30LcRm4+YsNPXXeOuiAVYkyeM6R46b/ANRQ+FuQxJJ3Hdxo8jrHYlUGCDxM7weBncfCi7A+bbuDfGtXgJHeA3hIoVMQx7AAAJE+cx6KR/kVnEdzi5mbdoO/QeuvSMA82rZ5qvrUGqHbuPbQXEKhiWB7IOn3geR9Iq77Jul7CMTJKqT4xB3eFT1fiX6X5sy4stcHMkfxWgPdVBwd3tIDPlKJ8dKvl++q3gpOr5Cvmzg+GlefhctwL9V49DRQ0fIOrSeP8mC7IGUek/r41w18jdHu9FRhaw1fBiwTDdw/XEVG766VwwrVHB2B3sC8MzqSZgEeYx/qobb0reP7wB9Ue6o9kvFzxUj3j2U4+Q/KFS4Rrlj0E1w8rgbWcGyhgCjZo8ocuEd9K26JKSSLuUTuyz5s2b3VaNOZroMvP1VXYh2kxPhdkdWCF6sjLAzLr3ndvqFuj7EZeuUDh2CTHjm9cU/zpz9Va69OfqobZDgS2NgZIAdSBwZZB7zzre0thdflLPlZdAQJBHKJHHv503fFpxf1Gom2nZXfcA+6fh+po4kDX6EuG6PokxdDMd7ARpyAB/XdRmH2aVZXzBspmIImPMaKbbeHA/af/WfhUtvGozBQDJ1EqBwnzac6SpjyPDa4khxFtn4RBnj/ALdaj+R5gVMEMCDrwIjlRV3FIu8T5hQ9/allfKXfwyg1NTpeC7q/6gbDbCCIUbIzEg54gjKNIBJ46ngamt7PKZiXTtFd2gAVco58P1pXH882OzCTPAWwSNSBPeSKJ+VIdRbjhy3GNwMUL2eRdNPP4+AnZuJa2GChLktJht2gHAHlQ+IQuzM2USxaA3E+aisCpuKSpyDNHE7gO/voa/jSkwAe0R6Cdakp088Ghu0uSNMKAZA1+18VqJ9lWjr1cn7R19VdLtViYygaE+gTQ46Q6S1s+Yjz6nUeiqpR4J1VeSf+abX+Avnc1ptkWiP2A/j/AD3UIek7ZoFtd/FtfZXT9I7gEi2p1A48Z7u6jiSe6fS/6CV2Pa/4dP49fVWfzVb/AOHt/wAXxFDHpFcg/NrMjieM93dWN0guRPVp5JbeeBiK7E+zt0+v4Cl2fb/4e2P4fcK2NnWz/wDHs+r/AG0vPSa5GiJOgiDUqdIbmaDbQCY1muwgOp9fwMF2anC1ZHo/21zc2Wg32bPjA9611b20DGayJMai6ROk6DJ76Fxe3XUgLaSIktnLRrG/Ko/9iuxPsTevX8G2wdoadVZ9A+FRHD2/8Oz/AJPeKiu9ILo+jb3gbjx89R/0jvTGRPXXYQ29f6ghsPb427W7mu79e2ufk9sfQtf5J9NcN0juD6KH0/Guk6QXDIyJ6TQxId2TZw1s/QtxyLe6Io3BOyLlVVInQBoA1Jgb+dAWekTMQGRQJAJk6DjwplhMT1gJDCATu15b+R1oUp7MaG8/j3IMYtx3VwLa5REM08e4ClFzYLMxfMsli0ZhEzO+JirDdcrGsyrHd9WNPX6qVY3bXV3GQ2/IjUR2pAMGR2RB4V0bfANRV3oCTo7zbXucR61keusPRvx//ov+yiD0jAMdSOH0uevKtf0jH+D/AJvyqmF7I5kg/o39r+Nf9lcno53P/GP9lFDpCv8Ag+utL0gQT82xngSOz3CIruPYPxBjsErBUOCNxJn2INKOwFhkTLPE1x/SC3p82df1zor+cP8Alr+vPXNI5YXYaBvRXJY9w8VJ9hFB9Z7qw398RVXYdocWXlUZy8qFd9M28VGXfQ5THAgEj0ikdDJBsKeANRXbVs70UnwFS2rDszCBkjR5BJbTQKDuGu/lW8RZQeUVEiNSB3bjQYcAHyS2wOW0pAH58642QZuARuUnw0/OiUewJQBBMmEB1gE6kCPXQGwf2rHlbP8ApqWouB4eKQZiDLDw95oLE4t1V7YRWQz5VudSoBIaRBGhHKO8yTfPa8wrk3WCFcxyzmyzpMRMc6jDwXvngW4BFJGULAOYgFtCB558J400c5RqNJAABHEwKOuordXba4ttSmrsDC9nQnLrEgUpYyFBcznUdx13jSaZ/lyIns4Q/wBjsRbP2z7BypRjXgMf3mPrNMtlN83vnttrSjHt2D4n21OV+TK3X4IjBAyni1tifQd1CFJWPpGIAWS3n3iKm6yAmgMJuPHuPdWsNtG5aupeQLntg5QV7IlSuq8dCavKM11nsLkOtbZjrHATWkEQOVSUcCJnUHLPOPYfzroqYGn92/tFYLhy5Z3Gf16a7XEsCsHcGA05kE+yu2itgZtnkR5jz+NGYYEashJ4GDofRXb4543g6g7uRBo3D7cvIeyy+daLnIjb8DHAbO0NxkOUxDAGAftEQPDnyoPauFUXEyxGVzBMagqNOyRx5cKfbN/lGxdtFthbBVRAlGn1XKA210zv37lt3WyGtpcQZVMEOUJkFjqMgjxNPxjBJTWclVvGW3kgEbzPLuFR9WeVMMdtS5cUq2SDG4eHwoM/rWlKp8cg49xqawda01Yh1oMeeCO7b3xvk086OOcjAncx9gpROp8abbDOreb2Gkr4lI4tMZ4k+T98elD8Kru2bU3Seaqf8se6rDiNy9ze0Ee+kG2h21I4219RNJHcrr/ECe3uOs5R6tKjNuuiDC7+I0Hf+ddh25H0VbDMJCEIrRSp505cxW2AEeE0OQ4Beqp4I5UpaDR63NB4D2UyCg+/cAt5wR5WU8eB/KlD4ljOvhpWVlOxcsZXrx+S22Er84QY5w0SeVLfldzLq7mDIliQPMdKysonFt2uCyWkU5c+YmNwhQeHj6YpLdVLXYJ1iTpz99brKFFAdrkKW5yq6b58ojwXT74qXYqgm5yCzw82sTwrKypV2G0+bRK5AMTurh30PhW6yompB21ngeFv40le4G4AGRoB3VlZTR2Ja3yLDsRh1Sx9ZvxGk+PfsfrmKysoT8mVv/jX9gTPIH2Yodq3WVYys0q12ErKyuYEZk7z6qzq+81lZXHGdX3msyd9ZWVxzOwDzrllJ4+qsrKJ2ERsh51hU8xW6yuOco1lrmsrKADYO/nTLYbdtvAe/wCNZWUH2Gj5IbXjp95fxClW00zKoETl08x19tZWVKe5pv4szZSFUYH63uFHT3VlZW2ex51EZjz1yVXl+vRWVlMAidV5fr0UJeBzGBpWVlJYUf/Z",
    moocLink: "http://app.stxavierhimmatnagar.org/web/",
  },
  {
    title: "Linkedin",
    cardImage: "data:image/png;base64,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",
    moocLink: "https://www.linkedin.com/in/harsh-vaghela-763203227/",
  },
  {
    title: "RESUME",
    cardImage: "https://document-export.canva.com/I1HTQ/DAFg7tI1HTQ/72/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20231220%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231220T195058Z&X-Amz-Expires=52526&X-Amz-Signature=bbda55f5ff6c42406a56c71a69c4ef304fd45e4ba1a46f153a5cddd3b1e9c0ba&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2021%20Dec%202023%2010%3A26%3A24%20GMT",
    moocLink: "https://www.canva.com/design/DAFg7tI1HTQ/8R4uMCFit5fAle9k8rn25A/watch?utm_content=DAFg7tI1HTQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
  },
  {
    title: "CODSOFT INTERNSHIP",
    cardImage: "https://media.licdn.com/dms/image/D4D22AQFvMcSc5oR0GA/feedshare-shrink_800/0/1700715204629?e=1706140800&v=beta&t=NuaWfDCsRDmgRQB8tV78ot89eZYegpITlrcQc03tq-M",
    moocLink: "https://www.linkedin.com/in/harsh-vaghela-763203227/recent-activity/all/",
  },
  {
    title: "Coding Ninjas",
    cardImage: "https://media.licdn.com/dms/image/D4D22AQHBP4RfOCIZ3w/feedshare-shrink_800/0/1688718820573?e=1706140800&v=beta&t=qucQBtzWkKdv4C7v7KCOIJJ5Fj1hERRKD6r5YVdra9M",
    moocLink:
      "https://www.linkedin.com/in/harsh-vaghela-763203227/recent-activity/all/",
  },
  
  
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
