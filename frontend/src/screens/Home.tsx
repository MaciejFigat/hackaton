import React from 'react'
import CardComponent from '../components/CardComponent'
import { LinkContainer } from 'react-router-bootstrap'
// import MockupMobile from '../components/MockupMobile'
// import CardComponent from '../components/CardComponent'
// import Slider from 'react-slick'
// import { useStyletron } from 'baseui'
// import ArrowRight from 'baseui/icon/arrow-right'
// import ArrowLeft from 'baseui/icon/arrow-left'
// import {
//   Button,
//   SIZE as BUTTON_SIZE,
//   SHAPE as BUTTON_SHAPE,
//   KIND as BUTTON_KIND,
// } from 'baseui/button'
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  // const demoSlides = [
  //   {
  //     name: 'Willis',
  //     src: 'data:image/jpeg;base64,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',
  //   },
  //   {
  //     name: 'Brendan',
  //     src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBgXGBgYGBcaGBgYGBcYGBgYGhcYHSggGxomHRYYITEhJSkrLi4uHR8zODMsNygtLisBCgoKDg0OGxAQGy0mICYvLS0tMi8uLS0vNS0tLS0tLS8tLy0vLS0vLS8tLS0tLS8tLS8tLS0tLS0tLS0tLS0tLf/AABEIAPsAyQMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAADBAUCBgEAB//EADwQAAECBAQFAQYEBQQCAwAAAAECEQADITEEEkFRBSJhcYGREzKhscHwQlJi0QYUI+HxFVNykjOCotLi/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAKhEAAgICAgECBQQDAAAAAAAAAAECEQMhEjFBEyIEQlFhsRQycdGBkcH/2gAMAwEAAhEDEQA/APy6dVtwwboAKfGDLQAkjo++jiE8OQSx8ffl/EMTJr8o6sT608kwBqPZAJBFtddP2+kblMp92ZO1i9/upgS5lC1iQOxOU/QiPDowpam7fvGAPoUAiiRWtTsCQP8A5JY9I1w9QK0uKAOXDu2bQd/hHkwjOUmgLP0FC4G/KQO+kawSySxLBiKXbW19oxjo14hNsqnIUxI5iyRzaUowIbcmB5HzZy9FFncJD3LtmibhjVw7KpmrVJufiIpTJl1NlClEdWtlLGlHOpLiCAMGQlTlwnlDakdOg+L1j7C4oqVfKwpRx+Wgo5+A61cCZTpzqfmHKNw7hzvQuBZu8V5GDliWCpjbZszhqUtGMP4Ysk5QV7B2B8+pcxSQd4Bh2CQ1IKDGMEJj5KyIw8fPGMOYaeSWJpEPiHFsxmS5gKkFWROUF6fi0ZjvuPNWQKx4JCxMJCUhIYuAAoklyxf1NPMYxzCpJl8xdCFqAzcznlKlEF3/AMgVAiFxbHJYywOYsVKJL2F+tyxs8dd/EE5KkZmIY5SSkglKg1ctflc9Y4zEYEglTDIRd7967EfKMYlIRVlAkUv3oDX4QxL4U6VqUoAJcXDKIdwCHjJQquUlgbmzb1NBBDI5MxBNfeAJYa/Ei23oBibOwwBSsAj/AIqcuNnAq/eGZWKlznKixAsenSuseYiRmQoseUuEuRrVxpQHr6R7hJJSX9mlIUl3Sok5TSo6xNqrfZRS6QviMGEl65D7pDWc82UB7g+kDwyeZwV+S/r0itilZkLUalrsA+lA9AGbVvMT8FJJQSj3xzXPu60tt6iJzjcbRWEvck0fYpDgrSoEMzZXsafZ3iR7Ubp/6pi2AtmKkpJNwNGYuCL9RCf+lK/MfVMJjyqKqTHy4ZSdxRmSm5fSnct9ILhwC4vruzlr+flA5ADFxUG/QAgj5QxKzJKjZ6HYl7DexPiOs4wRlsUhlZam1yHB+caV7yXs7+N23huVLSUOSEk1c5hQqLM16h67doXm1IDgs5OwGrdICZmjcxbuopqaBnsAw9CId4ekJSXsFZizPqkDqK1DawgVWAuHL9PWlfn6U8HLykD8TipYHM6QEh7al7wQBuGoJDJADhtc2hJLW9fGkUcHhwHJUVM4OvUBPQkC35RvApc1KEFrB1UuSTQ10YNBeDJUQVvRkgEsANyz1NT4ggKU9XMEkEAWAIf3bV6GveCplFSklQroAS4bp0BFdXMDwk1OUzCcylE5XsL8xpRnA0qIoSZCiAVkkF1FhzGtAA7uSWb5RjBStwB9tcnt+8PS5BNdIY4Vh0h1LDrt6fh6ABoqSMMFfXvtGMRvYmMKlkR0Rw6bG8LY5MtAGdQS9ATQesYxHReDScTNGZ0ApykgpIdLCubOzv2pDKZKSpkkE7bhtN4XxkwoP9MVZ2rVr9WqLRjHF4/ErMxSlFOVRyk5ixACSQEhnLBqFnJaJOLUVr9kwDABIBcBq0IDkmlIs8YUgZVlGUZmWCcxcEnLzVbrTtSIOIWhSiUkpAJylqMTy1FRoBre0YKDyMOoJLJGWYFFVaDKR+GhuwrR32g/DpolImhSXVyjK1jq4swb1aMT5jcqCsZQolWpzXBFMtSdavCkzGBamAZwl7u6dOunakK35GUd0DxYcnKCyt3LVIo7dLxFlTUkhCjq1FkEUYHx93iqciSMw5cyXL3Bd9dT203ieKFaQEqFCxseUOygQ2tjtA7N0aSFhJQZdVUClCqT3OhHyjMhksSxu+V2qWJ7W2+EFwMokUGUgsCVk9dDVngOKwykLCQwuRqncirN2Mc/P3OLOlQ0pILPWrMykkBihOrDMTQCj8x3j7PO/wB0en94zNXNsfd0bTp1j7N+gf8AYxJJNW/7/JVycXS/r8AUpGh30sXLDr3jaFvVnNDoeXUN0AEBlLIChSoazmhBptaDYaVlLMGFD21breO1nEg60ljtVgGetHI2Ne1N4U6nrTvRvjDNiWtbWr9/WAKDl+1GqTcAbwEwyXlDEuXVKiHqH9Xb0B9TB1rqDTqRRzd/jYRggpAJBYKY7PRgS1KPXWDz5BJSkUchOawNQCe13PR4ZOxWqNS1lKQGZwAHeocG70FB92qYcvKSHoHAqakAE0ZtQW8VJhDigIMoqCagMP00vcs2p/U0O4dWRUtBYKAKq0AJdydGFC5/KIIpfw8gBKEqDAVZgxXcktZhR9CbCsWk4kJUpWXMUgsB7qWSwHcOQRo41Bfn8HMKglCXCQeZhW7hJJsbk+Ohipnzq9lKSSAK7HyzEUB0DE0s5AUeGyipsxuXJBuXdbNpe2parGOmk7JQw7fdYn8FwhSAVkUFAk0bS2nrFtEyMYTxeCExJStLg+IhcU4RJloUtapgoalalNuwLtR66PHXGcAKxH47hUT0srKAAa5cxApYEtpqDYUjGPz2ZilJOdK2U+YAuzM4qk+/VjYW6x7xHi80JHtXU3MaAF7DVw/f8Pp1+D4Nhyyz7RRblUqhIFXSAAGsWajAtrHM/wAXqBUkAJ9kyCkZq1LgqDlzQg1esZhRImrzozVKidfzcxJoTYvE4k+6qWlSXBOlmDe9UHKTTcw77eVLSc7ErFQkOA+odmq3KPUWgWDUhRze4KEoAOYgM4FaEbG7jqISijYkMSQAlLAj9IBDFwAdunaMzMYtRS7FSvxEi1rmo97paoi1/LyVHk9oyUpU6wgF8wOrMGennWIOMAK1A5gB7tQ92IN3rTwInJN+CkWl0wOOlqD5wliQ1CUszftpCUqckrQCKNlNhTcv1g3t2SEuVA6G47WL/dYSnFLEAK8h7bkW9IEZvyCcF8pYxGEl5eXKCm5QkZSlkhJL8xUXct1iZMQlIAdLk+8A4IOldaXhUzJgop6tlN2AoKClqR8qTM1US/hx5Ln0gTSbuxoN1pD8ycAp0KANspSzUuNTtBf6mx/6wtOKjXIke6miRfSrxn2Uz8qPUfvHPx+jOm67FSoAkCoDV6vXvDssukgDMVV7sCSHPa3SE5aOY0A32uCOv1hhCS//AB8x3UcN7PsOpw53+AAqH1oIOJwYigUBlpXMai4JpcbUHhdCeUq0AJZ61DPXYtHyXCSdNPH1rAYUGE9VJb8pLkaPYExSXOfIDYOCbkk0cbcoSPEL4dIIYOa5vg1X1g81bpCj0D6PejFvEC0GmaRiqoUzAFIbdTB/Dt8N4zLWcxUTmJISRWoTXQ2t3YwvMWEqBBL8yiQd2Itb/O0UeG4FkZjcnpYFrXPfbTWGVdiO3otcPlqWyC2Vi6Q/4iSXbe+h5rB463CDkZKgB0ua/bd7RzfDNQBUuyQ1EuSTRmNNY6jh2FVLCpikgOQAnMKGwCnqTToBWGQjHMECAKq7H1qdYoIWYcRgXYuLRs4KCAWSHjXshrX4wZWHYOYjTeNIqEhRDFphohxRibgvS28YxH4vPCJyh7VSAUslIJylrdtRs/oYnEQJ0vIkOpF8yyQFJKiaAficBhvSkN8Uwk6YVTFFWehzJcISkCoSsuC4JvQeKiwuEEtwQFpKaZg73clnLuDbYXjGIfERLCPZ8udxUkcoISWYXatOnmFsNjRLYDLQXA1BFWo1BSp6wXFcI5llTodXKlQyhgKWpZv7loVn4fKgEgE1cihFhlNBuz94RplE1QWd/EMzKEkZUAgDKKiwqVE6B2B+EIqnma5DM6hzOAzpVmzO5bOmz0NY9m4hWQgkEUajqAdmCm+HSFsPicswrHKoDKnRlEpIJOpYP4gX9A8X5NrUgFYXyDVLs1HKanQuLRPn8NDJUk5gp8rEq1tRq31+cFx8tagMyiSVF6g6O5DOTS5J8RPkkJOZGYEMbDK/WuzwnG222PyqkkaRhzZWbaoIZty5DRoSM4YFSWp52B13h7DKStJKlcwrkcZTrRvk/pCmMnZWY0aqWptRxsY5uT5UdTjHgmCxeGCFMCteoC3b4av1gnsl/wC2f+8El4lOgBGoLm/ex61gf86n/ZHqn9oNyfgHGK8ick1ZyOhG+1fMNsygBct6HT4/KMTUqQohTO1Teg2V8KdY2AARUOGZtbfK0dtnFR8maQCxIzAhQ0ylvv0jc4BwEgsDR2Jap0F31aDyiEjNYkj1uG8j7eBiiszC7kG2lCA1O0IUXQSVRBrta+x+BPoPBwD7MF3c0D+jhv1X6nrCqAGbXTyf8w3lozB7dqA+bNACv+AEgrU5uzeOr9ouKBYJBa2qqJHTwCw3ibh5JChRiw9S5f0aGkzSSo1dmG9HP7QbAo/U6bhGIyo5feqxG7j6gV2EdFgcSTMIKuYp5S9EtR2azevascVgjTSj+9rQ/V+kdDKkkICiRWrVqSxNmszU9YaLsTJGju8Ag5Sc4USXJFjtfpTxDQBjn+H8QUiWArKlAYXzKLkgC9LH0bv0OAxQmJBDAsCR3tDkjydhgtJSoODp96xKX/DMsEFAAYGihmGYqSStn94sz+Yq8U4h7FCVkEpJYsxvQXO5G8c1jf4jWF/082RQzKCg2Ua6FwYxg3GsBLQAZyySpZysVABwqhIdw6+lG2rOx8tK8xkjm5lOeW22WpCSGGYRNxuPJOZQDF/xFs6fdylXNVgDp6wlL40pbFBGYJ90KLAA2KiWAq/fuYxgOdakKC1MAakquLMEg0qAWp3iDjQ0wpYMG1YsR71Aw33igcQtjMYtU0sQb3d69dIDxOakpJAdXLsFBlByCOVQanZony8Mqo0rRIxrZQwJr3qbB/GtawBZUoi9hew07PT5QxiZLNlZYBDt692qajR4HIDFIegdnZLHW5c0FI55ZEujrjicv3C+NnBUsBJZerDmFTYiwsIn4cKlg0950vynbQij9bxdXhkBancZgwUGqQGLAAUfQ3hLFDMCrKCTY00YuVFjfpaBHJy66BPFxdsnTltVKg7VcbittesawqAoFZIdOhJ12STa8fBQKcoQFHcWHbrW/SNICmAVROgJbyHMNJV2LGV9ApmLAUyTRNHBOt/FYz7Xr9+kbm4Fg5JqTVxltqGv5jPsB+b79YKnGtfgDxzvf5GuJpAUwcEODUENmLMws3waPsGohQUC2VQUNewbZ3jGQFLguTRmtTV+/wADA/Z+7Zy5Jdq1/b5RZ7WyCdO0NYCcc4UDYkf5AtpGZpqevm+sZw6SQwHMC7jYguGs2saXMq9CxfcfdYFbHvQWSlQJLP7oDaO7AnzDRsHqaG2/x+9IVkThlD2FQzXcl3Hj7aD5izjt9vAGQWQSBVhS+xe/oBDUmzBV2qXbf9rwiiYWKXIo50cO/wBINg1VCQWo5pRwSz1tf16wH0Mv3UU8MwUxzZn8hy9HO33WL2EnF61owFzSzbbRElzA6eYt2/vUdYdwxLgBvA7vb7tCY2l0UyqUtSOswsoexWHdZINANE6G94yudMlp/p3NHNgLmuzD7aFcCujA6+PLffpD0zEoonMAWILnU1BI7KHdjHSnZwSVMUVx6ahAMxf9NQo3MFANYOzsR01iNxLHIWkIQ6WGVmVUB6lRNSdm3jM3CZaCYCfdIDOW30FEp1JpqLTVO506m9LE5RW0azJGlyZih7oCcoBAUCRWpqaGzRqbh1IsWLB8oIJBYsRr9Y9khIc0LO+zXr6wTGYlARymhpQsQda+tbVgDUTcJicrkgKFgC4IO4o4t84+xxTMBrUvzGgJFbEUoYwtSAQ9djdR6H0aB8XxClspmFE0BBVuTXbWJzHxis+XkDlQL0oKGlb3oQP2geFp7xYAUOmnXra0Kz5xc3brq5gwqwdL2YuaObuL9UxKUUtHQpNq/oHkygocswEDVmZRdzV2NaRlQT7qCVqNgGqDWun2+sBxbJU4/wCTVA0Iv3jU1AKx7Nhy1PuufJ8U+MKobuxvU1VCj1Bq+h03NqX+cFkYUFSl7EZVEOxNSG0o8amJUQAaZRQCoLVtd63rE7EKNk5gWFQde3WKv3qkQ/Y02tFczlCjCtC7HMNxR/8AEffyn6E+oiThcKTzLJPTtqqG3T+Qeh/+0Q4KOo/g6Oblt6/yBwU0KQU+T4s3WMmUw0IcsTQmoaBSZnLQ3+kFkrBZy1Ou9frHYcSGcJKJTcooWVWpA90tqTRyWjzD4UqJYEgXZqWs/R/SBol5QzjUK1ZjobdXhnCLT+JJd9Ddwer6adIV/YpH7g1SKlIJU5qWYmjUSPSGlBkhI0YX6fUd4+lpOUkB3YAgWuEmtAabwKTMqQKitW+XkXgeBvIyuUWd/UsSCKDLoL+sawMnnAYksmoYABnLuO1o9TJKklqfqO4Bo9mZ4NhQtCsgJAcGr1LXZup0N4S/BStplHDSwEqCnfME3qEsoimzvaKuAw7Eu3LTWvZ/u8IYdRACqMQRppeKXDF5y1GDdNK19I5JSlFX4OtJN15DKIHSNSJaDfMp25Xo9wST9bNA8eokswzUtRmob+NYHIxOVQzFnJzMaMTWgo0d2OVnnZIo1xWUhKwsZB7vIAx1NSPeiROGdWagOrGh8+BGuLYoe0/pkkEP2oHO4sIXkLDH99PlBu2CuKG0yAsKCgWNLkUpt5hHEYUIGUuaOxeg+UU8EGJFqODv+94FxEpzEKD0u43dqiF9RcuIyx3HkTpCAp+YAbNppUig6QvibMQ+jsKjcN9Y+xAAcB2exsGv3hPESjQswbYgHxrBaTEi6FZMlSjQFTEUAJIDlhubQXE4aYACU1cUSeYHbKDmhZKncgsRY28QfhyiFp5gAHCczqDq0ACgwJ6wjTTvwWcotV5HMOpYRlMoCwzlJBB94Oq9j6NCs9BUpyoE6ZQWpodB8Y3i5aQ7TCa6pYuSeY7WHrAP5U6FiXCha3XURoq9oEtKmZWrY/Emo66wfDyGYvUGgehDOHBtpAhIKSHYeN9T3p6xQlSdP20inBNE3kaYoZAz5ka3e3UCD5ZO/wA4J7MZiLmt9X1j32PT5w8Y0qJylbs5ZKMoAL6j4w5IV1D8welQoV+D1jOHUVJKAkF+Zmchk5lEHblr2gLZVAnUOPD0fxA7D1scQou93Ddv80jclRHK7Ve1GDi3atPpAUpFOwbsQDT4VgkuZlSSQXcNS1AQfTpAY0bHACQQP/b1DU76RmQlT5dnLalnZ/JPp6EnzHFKBi+U+9vbxT5xkHPmU4CqUP4i7cqe5tQBolZetj8gl2YajKALmtoYKrsVNQlwWduWovT4wngFqUzGvl2DP4A0hjEYjoxo+jtW1vw/HzCte4dS9o0Fe7Vhc1IqwJpYNT1EVuG5iqjJGrN0cdaF3em0RsMaAGlQerWvY/NxFzhp5iw6Jc1LgOWJratO8QyL2stFrkjWMuqga/vFgQzb66dPMNcKwYn8ygA3R3PUm4tE/GLCiRXMVX0bYE37x1nC8K0sBjTTfz8YspKNNkODlaRz3EeCoRUZWP8Ae1RrrEdRCaMNqAuALOSfpHf4rAlQJ8DoBVxXr8I4GfhwJqxcJIIFyCw81d67xzxl77svkh7aSPTiEizMemkIzMQ9U16PTSveCKmZb1D279IAAh1UDmtmDXo20dnFXZw8nVGhMFyGGr7XvCPFJuZmIyXYBm+xT7EExE0Bw5Ors/1f0eJxQSSDVhXRvVvsQVHdgc9ULyV8wd0gmp23+sU5UpwrKPaCmYMXQHLEHMSXrQGB4fBKvk6BQNzcdGb5Q1KklBAGVtU5mB0952BvraDw+5nP7B5OAUAVGqmGUlyA+4t5IuYImRVjyip91+YUI7V+EM4UZUjJUAZSCTYCxp26QHiGJCQkguCXYmqTq4a1/MFJIG5dC0mSpSiFswDUN2770btGVrZbDc/376Rg4hSTmWHcZSd2FD608QLEoCS48aN0iiJs3iwXDUO4YtAPbfrHoqBqn72jWVOyYILI+L95Sk0GY5asGPUMx1bqYCZheoYg+DvSNSZdVpe4CQS4cO/ZxG5OEVnAuRvRrEdTeJrRRjUjDkp2OZhoCGp8hB8VIWghRLlac+1A3KevLp0jxDjKFpIcO5GhJIYbMBFBE0zal8wBSokg5hylg5vQmnwgNMaLRNRKJA3VZ97fC3mHuHSSEuoJUDQAvUkgfPL8YMMHmIDpAeuWjFrdnat+sWZuGzIQEJZQUXfSrkDRn0MK76HVdkrAISARleoBejVsNxUenWCy8MXTapJcl3BI6NtfSGZUoJmF0vqK3cN82o8OYaVzZrFy7PQOzDo9om27KKqJ83DAK5gUn3bG27iju0OcOmhBDliwCnD0sGJHmHMXhBc2Z+u9/Ou3mBTEgZaubPXRhaJTlqh1G3ZjFTgmbe1dLm3U/wCO8d7wfGoWCE/lY7A/Z+Mfn/s0zBrmFBehN3uPv06DhPGZaZYcpSQ6VWd7EsKl+0CSc0qWx4SUG7ejpsViCHbr8NO94/O8VNSpam5VOQrYjQ18/CGv4n4qc0sylljmCmSW0u4YxAkNV5pPvPqegA/vpGXwskrsWXxcXKq0bmry0URTV3r37QtKlKUXSCRmNWpo/wB9I9m5RlNy9QactwSBDEjFJKWLdGobNpHdGNdnBKVvQ1guFlRKplqf4fURvEcJlgOkjXZyC9PjC0vFEDKC4FBu3r9tB5cwNfe/WGoWzOFQwyl2d3LuRVw73/vCypnOTLlghgCC73dxW4YR9Mxgcc7XLb2jEhSVDNca3eoq8ZILezzBqyrY0CgXawYUHpA5kgJJUC2h1JJNy9x/aBScqiUkgEVHxYv4huYMySQQKfu8AKtaJs+dlSUkEt7voMv2djAvaEpqbVptoe9YDNmEq/qVapNbHXu/1gctbZmtb1Fa7V+sYzPZxcmlPpeB+0PSCibQj6bUgeVP2IIrMzJIPKSkdfNP2hiWtiCKWLttsd+o6xME5iO1r1j4Tc3KGDVqd9vSNRrKiiVLDuWYWJo7N12g6JgSvKQQHJr5p0NBSJSZqgGGbxt19YampXmKFXFQoHNcA31DadYVtIeKbLOHxQGjCgqKUbfx6xaTjHcAhyxJB3ffVgY4xWHUFCoU7Uq51bLvaxhsZiAmjgl3UagmgYbVF9IRyRSOOR0C8ShLlg9BXps3WAJ4q1RV77Pr8InSkmYMrFKS6gojPYB8pT8i7PDGG4e4spnqCMpU1XqALF7QHNIdYpMdPG1Kd6OKHR6Bq+fhCq+MLIZTCta61rf7pGv9MlsQpRSpiA5ajD8N1E0FHsfDeFwcsfp3eiTSgNX27+ghXKL8B9OS7YnIlzFEKSRublIpuaab6xRwyZUs1zLKjs6ah7EU1/ePM8ug5SDQAhzQGosAfNXrUR5KnJK3ygJNDnKgk7JSUl6kWFIKt+DPhHzYnxbFZFJCE8v5SCyjrrW+kaS0xx7JlAB+Yg1et6iL+GkqWstLJSHUCHAHKxFAQzioYmho8LYmagZ05lpZJshFCknKcqg1iQ+WDbroVQV9nM43g01RdOag1dgO+8Yw3DJwSfdA3JLObadbR0SwClJKllJDUBcVcumqQepp6R5iJRSiqXRcFaimwpV3JbViLQecgenGzn14ZSUuVgGjBgXbergdW27RgCapgCVd2AHk/dIs4aYBQtrQMxcO7uSA6vFaQGYEgJBzKNAEaJLuAKjMnejUgOUgqEH/AAc7NwysxJdR/TW4prGpSpiQXoNQb+n3pFcYdQNMpVV2NhWhADk3oO0BxCTqkgfhpQuSSRQl6XJhub+gPRj9RNINXVcbUHQt/a8C5kj8VD6mtvvWDzJhZL0BJYJAJpYHV31jyYCwSUkqoADpf99YNsTihBc1SnfKHo9XCQdA9bxhQIABLg2OvR21raGVoOfKcuWgBFXPVmb5awEFlBIcdqgdUgWeMpGcFYFSyA2u0AdX2YoKw6XyuS4d6Amh37wP+VT1/wCwhrJuIivCqFdBU0sduhg8pgpLi1VUdw1fEWp2BUsFaVuVEDJnQHIFeXU0pC87Bq9ic6si3o5uNjo8BSsdwp6PMiACsBhUM7DowJJN41LSooBqlIIZ8rtsCoPdvAj7C4hITVAO55iH1JOU08w8pJWCs5PZhg5KkmuxKRtpCbKXHR8nCmpUzNSjBgK2/FS3XpFDCYNKkpX7FswDDM7jVP8A5Ks1C0JLVLU2aYmzsA5AFAATQdzeHMJjufLKGVLM5Q9T+omneNwdBWVKXRaw2GyylLCgwvLOQO9gK3tR6t6orxVi4SkNmDVIscwodt4Di0KQklasrEZSchLjTKxPV/EATNKlBGcKQ1VA5RWwFGhFFJ2ikskmq/0alYwzF/1KhqqyZlMHKWLMz2hOfPmJUoHMlKg3NVRS7hwbWfeKs0GSwSkZiAQWJJ289Yn4yYtRCJklTqchtewaHhfK/BHJqNPsPwpCVJIyrWlJcMHNRYu5A18Q9Ow+eUkIWkgcrqTZi9gelTCHDMdNlEBCSCRUFOUEjrvFnDzZiyciCXbMwt30iXxE5pXDZX4eGNupa/k9TgZyVZ86jlVyoz93ZIFQXO14xj8DOMsKUlTvqtKjW9Gct06w/wAY4MgAr/mCDl9y9bODpEjh8v8AprUvE5FJSAkleYKq5DCoNB1h1N8fuI8a56egGJxBSEKmVAKg+R72CQQQQD03vBZc+Yp1IJSXZ8pYkUSHILGtaARmT/NJIQVpyrFCFVY1oDFng/CsUpSknEpATbOMyiNjUepjKcn4C8cV2yFxRLke2AKyaqIZCj3ZnalozP5gHU5NyGZ9K0fuY7FXDMOt0TJhWoknLm5c1yyY5vj3DJCJgRLUrOS4Capa5dIa+8GUn2qBGEb4u7J+KSFpqlClAVJS9Ow5T8IURhSU/wDlW4BU10Us4Nh9tDK8N7MEBQlnbMoV8mBnBpSRkYqIBUXLZj0dqQkcjbdrXgo8KSVPfkVnySmWQokJcDM5yl6sEgV1v0j3h0kAAPqGcAByaigjxQme0SkrBSqhFA3VwKQWRiJyV5EqUACzPykjYEfHWG5WgODi9ns2SEKYIcuSyjQU96g23MCTgiUDIgB1A6vbQMaNuYFjWKiJk45jcBJKR5h/CS1ezJ9owFiFGWw6/tA21sFJPQlMwany8oUwcLCrHUN00hb/AE79aP8AqYYGNNkyipzUqVmUp9mEH/l5P5D6f/mHXLwJPjeyfMxCSrLzDskgF2exvHqOFlP9TKAKUK3fulRi9JnpXNEtCG1fYC5hLimCCpikvmAtzEAddnjdVRq5N2DkKJoCEi9+VL3av0h7B4WSTz8xuwAUO5cVMRk4UKdKHKrUH1jqOFyjIk5FMM1C7Grbwri01sfmtqtkrHcQanshkZnI+iYFw3FocuGqWAHuhWoLwaZiEEn2iQ490WDDWFMPzqJSyTW0Dla406BVPlaselnmIqoVYkXfWEZvBly0hZU7uwJoI9RP9kSFErMKzsWvMAp8ugPWLd9dEG/D7GsPxMBTLDlIYEHXUx1OAnypic6ZqQpL+9dHbvHIYfhx9qwYg17QWYU5wEoICSQW/E2pjOKaApNFZeOK1sEFQf3gD6xc4JxnJLVLUjI1v1HvE1H8RIlpqkAswZoDL43LmkBfw3hI41jj7UUlkeSXvZU4pj5fs005wbi4/cRKM8zFCVKloNAStsvcQlM4qjMUlBVtHmJ4wEjNLTl0MZwl4ZvVWrOmRKz5TlJKC6VBwxHWDLwy5jrCKm5JItqBELgfGF+zKSonNZjYweTiJ5WAJhJ/KbCIRUU2kztnklOCbSBzOHYkqyjko7hKST/7EXgScJMBJdZULuj4PFhf8wwC1gKNhA5vEloSozAeUX3h3ka+UisN/McxNntMJqvcKS3dnirhQJgAlyWSKOTb9RJvCWJWiZlWKlX4KMBr1hiZjFtlQlk7CHSjkV7JuUsTrRri3DcoFm3q5PiFcQsZXBc/lOvaJvF8ZiQ2TME2pBJWMKEhagXo/WJTxNNJdF4Zk4tt7EMbNKuVSCgPVqehhzCTiUZQslIDOpi4fUQzP4ilTf08wOu0epMpKs+XSwi/CtI5fV5O5E8y5zshSUtQNZu0e5MR/uJ+EGxeKSSFWEC/nkflPrE6b7RW0lpi+BKkklJY66fGNY6dMIZKS1yTZ4aSZU2mbIoekbxOEWSAFZknegijXImnwQngsWtBBzClg1C+kVpXEwr/AMgcio6GJeLwGVjmB6CKvBsMh8677bw1JCOTl0R+MIXNUG8ttDkkYcIAZWbd4rLlSgpRQQH/AAm0T8RNTLFUp7iFrwmG/MkRlYhlEJ+N4ICkpOdRJNukDxmISpTpDGMTJ2YgMzRQkVcLw2apjLW3V4tH+F5igP6rE3jnMPi1poDSL/DOKqJAzWhW67HSvoGr+FxLW81VB8Y8HCBzKlLBbTpGOJY0rmMolQhPMZRJSSkGMre0aVL2tFvhy5MuZmLO2secR4hKMsqCUkEsRr4jkcZinffePeETEBYCzyvUQIwpU2Zzt6R7KlrCitCilOgi1wfNOPLMyrG5jpMRjMMmXyIFtoj4ISpnOlGRYgNrbQyi7SfRURgJiWUsFZBuFQr/ABBLM1BSy0kaaQ2niAR7xrBV4gqTnKgHsISPJraKy4pqmcQnCKSAQS+u8MpkrYn2h7RdQmW6i/NtCisal8p5T84MG1o2WpbPeFLK0ZFpUW/FGZHBVLKieZL0Dw/J4+hKWJHwiLP4ufa5kqIGwtFTnD8Q4WpIPKyRpEk4IhIKlEA6Q/i+NKVV3GoibO4kVM1hpAprobknpis/ES0kJKjHvtZXWNqku6lAGMun8ojJWuqNKTT7sCkpA2h5M8qTVTDSEM6FlgI+xs8MwhXIdQryM4cAKDl4qLnpBBBsI5WTOIIijiJ9BWsU7I3Q6vFgqfeF8cQ13hBALvWG8NLzljpAqtmtvQrKTWDCU6hWCz5KR3jEhDmDaBRdwsmUAH1h4cIfmlxPkShTpFzD48JSwjnm09HVj12QJ/DpmeJ/EMQscqjF/EcUSF1MczxeaFLJEWhqKOee5MXTlNzF/gPDpB5pih0eOdlSnvHq1aCkOIfo+IRKVKIQ3RohJJS+nURG4XjFS6FRrHS4dQWK6wkop9jwm4vTIs8pJzKUaR5P4mKZSWEVsVwgFLpjm56AlWU3gVXZSL5LRYk8QK2YV1tAMUoqUXSe8I4dRQXDxdxGZcp0gPC+ok9jek2tEmXwxJD3hlOESE+6XiJh+JTJS621i/K4yFC0VRzy+hPn8KcO5HSFcPw4gmsVV4/Mq0ZxEwaQQC8iUCfepDHsURK/llZ3Bo9YrezTvGMSv5MJsYXnYd7wOdOU94GZijrAodyGMPKSI+mVLwPDKa8EUqCIHGNCSKR4MbzuAwhSap48EYw+gBRcmBLcHlhng8sKvFkYRFY5s2eMNM6MWFz2iXgMY1FQziVg2MR+JpKVUjGEnHWGjC/cjSyV7WNYhOsLJmAmsFxGJFhGcPLSbxZX5ISrwEUpIFIRWaxUXLQBEyckPSCAawKgTWOn4bOSKPHIYaUXeKstbRDO3VJnT8PFXbR1szEUiDieGBc0KBg+HxLisK43EZKgxz4VkTan0dGZwaXDsdn4caCCSJhAYxARxFZ1huZjClLmG/T47tC/qJ9OhDi+AYlQhTBgk1tFtE9K01gHsEigjpg/BDJFvaJOJmEKYGPUTzYkw0vBsXMeKlpIihzg0LbWPHO8akgAsYcypjGIk4OaR8JZgwEENolyZfhHYm8bBMfIEMkUipAXePoGq8FEYwfDTygvFWRxERAWY+Ci0TnijPspDI4dFDieIConvtA0FzFiXKGW0ZR4qkblylbF5WBJDwqcwMWcMosRCM4Vh10I1TAmYdYPhJIJrAVxSwSRE8s+K0Uww5S2VJWES0TOIsiKyLRG47HFii+e2dmSVQ0I/wCptA52OcQgoRuUkR6NHn2xmRPOhg6p5IrAQgNHqom1srF6DYeWTYw8jDqGsK4UxQQstDoSVrQKahREKewIh9Ki7QwhAgt0KlZGCVRrmi0ZY2hfINoCdjuJ/9k=',
  //   },
  // ]
  // const sliderSettings = {
  //   infinite: true,
  //   speed: 250,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   arrow: false,
  // }

  return (
    <div className='min-vh-100'>
      <section
        id='partOne'
        className='bg-dark text-light p-5 p-lg-0 pt-lg-5 h-100 text-center text-sm-start my-3 my-5'
      >
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div>
              <h1>
                <span className='text-info'>Smishing </span>SMS phishing{' '}
                <span className='text-success'>analiza problemu</span>
              </h1>
              <p className='lead my-4'>
                Naszym celem jest zwiększenie sprawności i utrzymanie stabilnej
                platformy komunikacyjnej między org. a klientem.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id='partTwo'
        className='bg-dark text-light p-3 p-lg-0 pt-lg-5 text-center text-sm-start'
      >
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div>
              <h2>
                <LinkContainer to={'/home'}>
                  <span className='text-warning'>SMS'y</span>
                </LinkContainer>{' '}
                stanowią atrakcyjny wektor ataku
              </h2>
            </div>

            <CardComponent
              variantCard='info'
              title='Zabezpieczenia'
              description='Niedostateczne zabezpieczenia urządzeń mobilnych, w porównaniu do desktopu.'
              link=''
              linkDescription='Więcej info'
              variantButton='secondary'
            />
            <CardComponent
              variantCard='light'
              title='Nasze rozwiązanie'
              description='Proponujemy ...'
              link=''
              linkDescription='Architektura rozwiązania'
              variantButton='primary'
            />
          </div>
        </div>
      </section>
      <section
        id='partTwo'
        className='bg-dark text-light p-3 p-lg-0 pt-lg-5 text-center text-sm-start'
      >
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div>
              <h2>
                <LinkContainer to={'/home'}>
                  <span className='text-warning'>SMS'y</span>
                </LinkContainer>{' '}
                stanowią atrakcyjny wektor ataku
              </h2>
            </div>

            <CardComponent
              variantCard='info'
              title='Zabezpieczenia'
              description='Niedostateczne zabezpieczenia urządzeń mobilnych, w porównaniu do desktopu.'
              link=''
              linkDescription='Więcej info'
              variantButton='secondary'
            />
            <CardComponent
              variantCard='light'
              title='Nasze rozwiązanie'
              description='Proponujemy ...'
              link=''
              linkDescription='Architektura rozwiązania'
              variantButton='primary'
            />
          </div>
        </div>
      </section>
      <section
        id='partTwo'
        className='bg-dark text-light p-3 p-lg-0 pt-lg-5 text-center text-sm-start'
      >
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <CardComponent
              variantCard='dark'
              title='Przeciwdziałanie obojętności'
              description='Strach przed oszustwem, błędne praktyki i zaniedbania powodują wzrastającą obojętność klienta.'
              link=''
              linkDescription='Więcej info'
              variantButton='warning'
            />

            <div>
              <h2>
                <LinkContainer to={'/snippets'}>
                  <span className='text-info'>Utracone korzyści -</span>
                </LinkContainer>{' '}
                wraz z utratą zaufania klientów tracimy
                <span className='text-warning'>
                  {' '}
                  cenny kanał dystrybucji informacji.
                </span>{' '}
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home

{
  /* <CardComponent
variantCard='success'
title='Budowanie zaufania'
description='Korzystne będzie budowanie wzajemnego zaufania.'
link=''
linkDescription='Więcej info'
variantButton='danger'
/> */
}
