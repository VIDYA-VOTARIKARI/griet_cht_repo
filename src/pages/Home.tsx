import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, BookOpen, Users, Award, Building } from 'lucide-react';

const Home = () => {
  const announcements = [
    { title: 'Admissions Open for 2024-25', date: 'March 15, 2024' },
    { title: 'International Conference on Engineering Innovation', date: 'April 1, 2024' },
    { title: 'Campus Recruitment Drive', date: 'March 25, 2024' },
  ];

  const highlights = [
    { icon: <BookOpen className="h-8 w-8" />, title: 'Academic Excellence', description: 'NAAC A++ Accredited Institution' },
    { icon: <Users className="h-8 w-8" />, title: '15000+ Alumni', description: 'Strong Alumni Network' },
    { icon: <Award className="h-8 w-8" />, title: '100% Placements', description: 'Consistent Track Record' },
    { icon: <Building className="h-8 w-8" />, title: 'World-class Infrastructure', description: 'State-of-the-art Facilities' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMWFhUXFxUWGRgXGBgWGBgYFRkYGRcZFxUaHyogGh0lHhkXITEhJykrMC4uFyAzODMtNygtLisBCgoKDg0OGxAQGy0mHyYwLS0vLTUvLS0tLS0tNTAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBFAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAECAwQGB//EAEQQAAIBAwMBBgQDBAgFAgcAAAECEQADIQQSMUEFBhMiUWEycYGRQqGxFCNSwRUzYoKS0eHwFkNystJz8Qc0U2OTosL/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAzEQACAgEDAQUGBQQDAAAAAAAAAQIRAxIhMUEEE1FhcRQigZGhwTIzseHwQlKi0SNDYv/aAAwDAQACEQMRAD8AJU4FMKlXr2zioaKenpVrMKkKcU9YKQ4p6YU9JTHHpU1KgYRFICnpUbBQqlNNSoBQ+6nBqFKloaye6ok01PRpAtkDTVKKY0yYrGiminpUwtEaUVKKasChqaKelRsxGKRFSpqNmIRSipRSitqNQ1KaeKQFK2FIaomr1timNqk7yJTSyiKVahbFPS98g6GU09KlT6hWKnpU9bUAVKlT0NTZhU9KlWswqVKlWCPT0wpRQsNCpUopRWs2kVSAp1WpgUkpjJEAKlFKlNJbCMy1DZU91PWUmjNJlJFILU3p7dPrdC6SHhmoEVr3VXczSrKwvGjPFKKkRTVXUydDU1PTgUdZqIxSqRWmrag0NFNUwKY0NQdJEGpq1RimpZUxlsW7qVVClSaRrLGSoE1PdTUYt9RWkKkKVPFNYukUUqZ3AEkgD1OKkM1tSug6XyKlFPFKtZqGAp6VIVmwli0iKhSmphJbacVGaU0GzE6aajuppoGJbqiTTU00TDzSmozTzTbGHNODTUqDaMSLVEtSpqCDYxpqRpTTpisUVatV2lLTCtgwTBjp1+tTe0w/CeJwJx9KWU14hjF9BzVF66q5YxWbUapuAUT3d0B/wzP5UM1b2xBfU2c+9wn8k/SuHJ23TtjVv6HoYexxl72WVL5v9gta1yN1j54rSK53x9OASb4joRbvGeY/CI4qw9p6dELi+5j/AOywHpklv5VPH23N/XGymbsnZ/8ArnXqn/oOkVGgdrvLaxLCDwSHH5bTRXSatLglTPy3R9yBXdDPGW3U8+eKUS6aVKlVyZKlTilSWYg9wLEkCfVlX82IFZr3aKzCPZJ9TetR9g0mlf7EW84fauOTAk5WJPXANa9B3a2EkW1BMSxMAxxhfM31Irgz9omm4I68OOO0mrA2o0t5jJl8jjI6HHSMjj3oto+y7gVWViNwnaVmDnmD7fnUtbp3R4AtkTAi37Txupk07xPh2/X4D/5VwJVLVbs9CXaJOOmlXoXWUcjzrs9zx+UxTsAPxKfkazq7jOxegwGHM+/tVviPtnb7/E4rqj22aW+5xy7NFu1sSVSeBNRNxRyw+kt99oMVLRK93edqjbt+Is/JzAMAVobRSEU3juKM21SFB2kSQq8gcc9az7dKXCB7IlyzJ4yfxD/C4/8A5pxdX+NfvH61YOzv7bfdv86X9H/2zR9qyeQO4h5kBcX+NP8AGv8AnU02n8aD67vsFk0v6PP8f5D/ACpx2cfWfaFk/cRWfa8ngjezw8SK3LZwHn5W7p4/uVmudpacc3gP7pH6xRL9hIBJDAbW58P+Exxn0q5NA5EETjMsmR/gNT9syD+zQALdtaQf877BP5vW/TNacAqzkHjagP5hiPzraeyPW2v+MD9Lda7XZybRuBPtuYr9BgflW9qyPhm9nggPdUD8LD/rZLf5ZqnUXtoB8nMYW4//AOwgV0drS21+FFHyAptagKgH1/QGkebI+ZBWKC6HLr2hn/l49ro/U1Ndev8AY/xkfqDVHdrWi/4kptAaAd27d14jHSs7dppu1INtotErMgz51GPSj3mVdTd3jfQIjVqei/8A5V/8akl9D/CPndXPyAWTVOlvW30hvlWACM+3yloEn5Vf3YuWi8KhDNbL5CwAGUQY/FkfSlfaM3iMsOPwItqVzDLzHlS4/r1OJxU7rMq7ovQSIICWpmeYzVV7tU7tUvgAG0QwlyRcnxCMADbx781u7f1t1NILtoJuhGhl3AAr0E9KVynLlsbTBcIwX7FwmfDYSBB8VyTiZkD3qDJd6+LHp4rMPsaOrcLWrTHkopPTJCk46UwNNGOwrbOeNk9VY/NbTfqKhc0QuQpQE8LutWYk+4rpJqnV3giM8TtUtAMEwJwenzraa3RtT6gq73ULW1SVBBWTGMB56+4qGs7qRpWt7xMjzAT+KeJ/nWrVdubNMl/wnbewXYbrLGHg7gM8enUelV6jt2dD+0i0R5wChuMZG7b8ZHvPFBSn9fqFqH0+gCu9gA+F5hFuZx8WI+lHLabQAMQBWBe1sWJtQbpaYc+QKF9vNjNE7rSTma7OyN6n6HL2iqImlUaeu+2cpMU9VpdBJUTIjoYz6NEGpk0LRjRprrAEKAcrM+hIBOPb9KOaQ+X/AH86C6C4AGkgYGTxzijWkaVH++leVm/OZ34vy0cv340bXbYRACfFXkxjbnNXdjaJrWmS02GCQRM5jOau7x6xbX7xpgOvAk5WBj50uzdet+2LizB/iEHGOJ9qnbqug9KzmNJ2NfXRsp3by9ojz8gRPmnH4utdH2XpLlvShHnf4ZnMkMQfxT+dY9P3htvZLgtttlCZT9BOeR6UR7N7UTUWy6nAkGRHHGPlFJKbfKGjFLqY+6vZtwWHW6WJaPiYtw8gzJ9qPDTABD1VHH0Yg/5UO7G7aR7Tsu4hZxtg+UgYBPrNbv2ySi7T5hczIxsIEED1/lSW2x2kioGnBqAqVWEJCqu0Gi05BIgcgkH6EZFWrVetvrbtO7iVVWZgIMgCSIODihZjh+xu2tS7qH9boP7y6QV8JysqXMmQPvwOaza7tm6GhWMQJDXXMY/DD+oPr0rouzu9WiubUt2yrNuVZRRDbCehkSAcj0qK9+9AoH7o9CIReT8uK29/hN05OYfX3oguDA27t5M7hg5OTAn6mvSe6V7do7LHqp/JmH8qBDv7pPLCcqX5TBA+EwcMeI9q6TsHtFdRp0vKpUPugGJEMy5j5UZSk9mhUl0ZuJqrV8ff9DVlVargfP8AkaRjAXsPQWrVuLY5yczmB1J9Kg3ZFqLx63Gl89d4z7cChncztC9dDm4QVBAEKFjE5jmo3e0r06uNkISF8ufj6nr0ovUBaQ7f0ltNO1sYti2Vnrtj1rX2bokTaV52kA+xK/8AiK5fWdoXT2d4rkBysiAFUjPljjiiHdjV3X8HcBtNl5bBJYMsQ3pDHH+VTdjpq6DZsWQzsdsthyTyPMADnHNX3FTaAQCuMRIiMY61zF3U6nxNWviYUBrUKg2yHPpngczxWzts3zoVa27rd2IxKmGJ2+bj1opMzaCes/DHGfb06VRSSfCs7pLbFmeZ2rM+80wq0OCb5JCo3gpUh/hIIb5HmnFZu2GIsXSpgi25B9wpiiYu/YrDIttgCikFRnBAIHX51PU6GwbIshR4YI8uc5JgdeZNcpZ7T1R0tsW3fxS4lgASV8wgiI6DNEb2q1P9Hi4zOb28QY88eIB8Mek9OKlokuvUdzi+nQIHsW0WTy5T4T5sSqg4+XrVOpQBmAiJPFDF1mqA00O5JLeIYHmwCoYxgdMRRO6PMfma7eyXqd+By9oqkU0qlFKu85DBp2XBhiybgIMzI82OCcdR1xW1EaSSTEDBjBEyZHrisOju2bbKioULBvw4JBljxPJOcDmtdzXW1QOx2qcSce1Ri9uRmENBZDbp4gUZ0NuF+cH8gP5VzPYvaYuB/DI3bZgkHn2mul0DSp9iI/wqc/UmuDM7ytnbi/LQF7zaUXQUMwXTjHA/0qzQaNbSBF4Hrzkk5P1rN311LW7TOoWQ1v4hIyYyJHrWfuxrbl2yrXAoJn4V2rAYjipb1fQptfmVr2JbtaR1UnzbSc5xEZj2FYu4l9dty0MR9ycyfsRQ5e1L7abUFtg27IIXbHmH3rJ3N1Wy8CzKB5hzkzgGByeYB9+oApXGVOxXJalR6D2D2bbt2iq8EZkg8mTn61veyPKeoDR9YmuZ7s6nUvYuljDbHKnYqwcbfLEEY60eVrs2843XAwgZHKZjFT36l3XQrFOKYCpCrWTJLWbtm3u019fW1cH3U1pWs/bP/wAtfjnwbv8A2NQMed93exWW+juVhSTif4WGPvXUXu5/ZVsDxrpUwMNcUR9IxXMdzluLZfUM7MzMbaSxIVV2lmGfiJIAPTafWg/by37jwqOVBmQDk/Mc8/lVtEnLkj3kUtkek6buV2bcXfbl19VuBlx7iuj7M0KWLS2rYIRZicnLFj+ZNeK9k6nXad1e2jjaACNkB1H4XAGfnz6Gvaeyb/iWUeCNw3QeQGzB9xx9KnOEovd2ikJqS43NNVargfP+Rq4iqtTwPn/nSMYE9mhQg2iPXEfypyqbLmM5k7efMPbNc13Kt3w903TcInyi4WIjPwg+9Tuaa+W1jbrkEHZkx/cziDHFZx6WZSLe/d9PAW2BG7O3gkCenzBPpgUT7kakPpkG0grI4MYPqf8AKOnSuH7Rt3RZCMWLKlzcCdzCZE/FuYTjiBRr/wCHunuC5udiR4bLzIJ3DnPxDaRn6SKzj7osZe+dwWg/CefTmZ49atJwDBPt1/WuRXsi8busMttu4TJORvnaJxyK3drdnu+gW0A3iC3bwD5tyqJEzzzSKPmUcvILaw/D05/lVFRsWytmyp5FtQZ5kKoNSFVjshGOKq139W//AEt+hq4CsvbFrdp7yjlrVwZ4ypFMKZu7ZGWx6ZaBktOfpRjV3hsltsSACHET7npmB9a4ns3sFr2jSx5ZV0Y+kDxJj70Wud3GXs/9m8u4uDydv9YG5j0HpzU3FXyU1OuA5bvJI81uDES4gwFnb/FXnPanbCrrb53XAqu4Vd2Z4aTJ2gtPHQjiujPdu4RpwNo8HdIEzLBfhx6/KuE7eLDU35GfGufM+c/61bAqlyQzu1wdKvetD+Ej8/zpVxguqeonrMUq6e8kctI6P+k3A2hoHmAKwI3GTmARJnNDXjq2Op4GZ4/WrBoHJAkDgKOZkkCCMcj8hVOssMpK3BHONwPB5wY5BFcSdvkeuof7kalVu3cYNsmQxDeX0A55yPYcxXpmgtqAYABJG6BGdqgSepgDPtXlfcy2H1BVCqjYS+4EDbKjB9QzDPp9q9W7F02y0o3bmAUMQZllUAyfX55rNVI6Mb90Fd4EkcT5k4pJ0gR7Y/kaz9/NGbmnuIAJbw4nj4qx91+xn01oIwAJLNA4ySQftS7c2Vsr7ZYHRugKgjbJ3KTG4TInGf8Ac1wHZmq23p2rnbO2IEcbTMBjHXgE0d1XYLWLGouMQBcJiATjeZ3DGPMPXP0oBpNdcsCFcoWAYkKpxMja4k5BPT8qeCVNJ2SyPdHqPd/tazcsmGTyodwDgxt5PsOsmjKMCBxyRyK4TufpbY015t4LNbcEfiAfGRPt+nHFdnZ7PH7pv4XZ/wDEpU/rUGlex0J2jPbqwCoP6yMU37Qn8S/cUznFcsQuUVX2h/U3f/Tuf9pqr+kbQMG4v3FUavtewUdPFWSjAZ9QRS97DxQLRw2g7xaX9nS2AUYkjZBOTGZiM+k0Gu96XX4EUr03Az9YaqbfZaSAjMHUyZjaNsSZ/T1ptP2ReeQqAjdIwcdPTiu/FKMo2jjbb5NP/Fl3/wCmn2b/AMq9Z7mazxtFZuYkhgY4BV2BGflXkx7qarnYK9S7h2DZ0NpLhAM3Dzg7rjEQfrSZmtJXDydBVWp4HzFXxVeoGB8xXLqOkAdnXgybQQCPcE55Mc/+9O+qULdUlBAJPnWfiHxD8I9z6UE7pdiPae7dYAB2MRmRJmahruxyTrLmPMjAc8ncM448w+1GVVVgTfNATtrtHeSwZcB1VtyPAcGVk4KgCRA9hJmjPcrWL4sKyQxeFXBJ6wOv4cwoHQSa5B9NcCvaBJVUYtBIRdp3biGgHiMevqIon3E2C/va+qlRADMULA4AUR5gYBMGRjmmaWnklGb1Ho39I29zqHtymSPEAK8/GI8vX7Vs8UbVaVzBHmEGfRutctouw/FbUXAwi+NsDoRuMz1Hmon2x2Ibuh/Z4BYIqr6blEDNS28TothDVmQh9QTjI6dapApabSm3YsWzyltVPzVVH8qlVo8E5cjis/aF0C1cJwNjfpXPdp97BbuOFEqggzEEyMiuc1Hb9y98VyBltoIkDGDA+vt1qbyeCJPIkdf2R2pas2muXGYJIEqu4yd5yAPQUSud4LDaY6lHdrQYKSUIYeYKYUgHkivPdGyMdjXGVcz+LMYxuH396JP2ggspp0tubZJ8QKIJ8++RIgQYH3qSn/cUjltHWJ3isfuW/eRdJC+UfgCyW9BXK96dM73LlxtNbAL/ANYeXTIJ+LoAD9a6LR9m2GW2dxGwSs4+IAGRHPP2obqeymuXnUXfIzNtRCu6SeNrZIicKZ9KtHHKe+P9Wh5Til7xzQ7EaAV7Oa4CAQ63GAP0zTVuUacSDq9QhBIKlLf8wf1pU2nJ1X+UhdEHw/8AFA3V3lDFUYeGD+IKG3DqT1npxwaJjU+MArKMl1U8/h5PlMmVI2gj4jFAbRbaDDm4HA3MCzAiBAB4jEH16CBR7RqXW2iQGVQWghREeUxEkmCZA5E0JbHFbvY1XrgtINoFsBiCwWC0zCgDp5Zz6DitPY3eGGbc5G8yCNwljzPpWTTaoWFK3gQoBOVAHJIBjgmQOM1X2poQu1tOqMGJJLmTmCpXdxOfSkutykZWa+9feS9bA2vI8uYXnMZ+Yrl37ya25kNc/wC0R+lTHbGoeAt22kerIInkeorVasats+LPTAf68JU2qdyivn+w71S4sEXk1d743JHIDPP5CazHsW+fwlumMij2u32oFy/cBPAC3DxE8xVKXg3Lagj+zbP82NUjkyJe6kl8RHid7sHaLRai0wO0x/CxwfpXadld7Lxu27JPx7hByRAYzHtE0D0QCNK29U/ruAH6Ctemu3VwLLswglmdPn8JBj/SkmoylqlV/L7jwi11Cuq7j3wxA1RI/wDT/KfFqr/gdjhtQ0ewC/zNNqe9mtU7nsW9vWCS3zmf5Ua7P7Ta+m4eXAMYJzkVriqqvoVUIMEp3EXjxnj5r/4Vqs9zdIPidmj+0f0WKKpI5afnVm4etOmjaV0QK0vY1sFfKi7SWhREnoWPJj+dGBEcVQ1wzisWu7YRVuDeC6giFBYgkYkD71bvI+JPu2b2uCYx9xUtZ3Zs3WLW7zKYyEYRPqQQc/UV5Zf0mqdywBExhQI8sbfOf94o52Nf1toHddYiIAMN6RBWD64PT5Umbumt5IEJJcnX/wDDGpUQmqY/Nf1IbP2qq8NbpZe5dF1MDZDfxDMnrEj60Ns95u0Ej93au4GBuDfeay9od571wsLth0yDtALcQQd0jMiuVQx8xr4UV1RrZmS931NsbUUYnjH8jP8ArWC93s1twEKsA/2T+pxVlvU2VnyEZmBaIn5FeeetWN2laj+qfpwj/nmm0RXKv1b/AE4ItTfU5PVJfJ8wO4knAkk+sCs7WnnyhgeOorsLnayxC2Xn12sP1NVJrlDHdaY/3ZH3DD7zma6llkl+FBWBON6lfhuYeze19RZUAh4H1/Tij+i763ow0/Jpj7/Whd3tNVA8pEyRgEbTx1wfnWDUa9CPgBJmTgR6ZBz8q532eM3emvQosTjxNfU9D0PeprttSyKDLCZOYjpVWo7ysp27VzwZJ+fWuJ0N932JmAYHlO0SR/DNFNJ2BqHuIu8bWdQWwMEwTB5jk1S1H3CUpT6ArXWbrPcczBbdiDPJ+En/AE5rPpNIYLBRPQkAfbOMdR60X1PZtwXmtMQAGYSIJKiQCOu0jJj0FQ0NxnuWrVmWYgsWKkLtUyrhmMwIB/Kc0dXgQaYDGolobcrDGJwT1EeuKI32bbujcsDcTyc4wTnpR4d20CG414RxuUg5zABExmeaYaDQIYu3ApaQZyZUD4gOOZmI5pW4tppDKDXLo50a6+5DbcCcM0SI4Uev68V1fYb6i/4bi2wNsAJccgbdswWRmJJ/tRP2mrrPaWj0t3b5iu0EXBDpP8IC5mDVv/G1pzFpLjmJztQfcmuqOR6dlRRQS3bM47mu/mvXRvzJthQpnJJlcsSTJpVZb7yX3ymmVl4k3QJ+hFNS6m97LLLSpSPO7Gt84VSMgLJj68ehIMn04mun7P0F/DWlNyQy7m3bSvAlIbqDAIiCK4dLhBkGD6+smcnrXU6DvLrH8ql29QBMtH9kCB7COT6zQzxnVwS+O32OfHGEn7zfwOx1PY3iKu63DhVXc0fgmOXHqT8PWq1sKgi5et4g/EzEFY4GMY4nrXLnR9o3gQyETMbyBhuRkz6R6VtTuxqmXbdvIqgkkROTgmSB0gc9KiuzZ3+KSXovu39i3/CuItvzYS1F3RMckOwBPktqpgCTlpqOj7bsOoNq0zAtsG9oznO1emPSs9ju/pknxdQWmZ2kHnpgHH1qvSL2cGBs27jbCeZ2MWEGS3OB0pJ9lg09U2/5/wCSkZSvaK/nqGrGrPh71tksYgCDEiYlsHpn2q7T3iwlrRQ9Yggn2g0KV77f1XhgEnapBMCeMf5Vf+w6qQZWYI+FuCZP8q4+58PubS7Nzr6Yqi7cRDyCx9Mn6xMfM1UezL7EBrhkyYBCyBziZjIk+/SrbHYgwty5jkInJiM7iPl06808eztm45Buq1Junw1UkkZUCWg8zGAPejHYfZdy2BJ2iICDJj3M4+WaJaeylsbUQKPzPuT1Pzq2f94rpjiUUYx9pau1YUNdYKCY6kzzwK59u8ZuT4QCKCQblwjEHEJ7iul1dq0RNwD6mguq0HZ5JBa0J6DbP35/Og30r6hfkCrdywSQ94ucSWeQeuBMRmrE7UsA+UjPoDP1+1bFHZy4kD3Egfec1p09/s8L5QDHQLzHtEVJwi93fz/Yk4J8sGt2wsStt29wDB95ptL2r4jqnhMm4hdzQAsmCSJ6cxRf+ltKoH7ph7bDUX7YsXBs8N1DAgsV+GQR/v50I48V7r9TOMfEF67VXle4lu1uUMwVwwllBgMBBiR096ip1MfBJ/tEn5z5R+tdB2brbIPhrMSY3LgDoAY46Ca16vtO1bMMwHyz+Qp3jx9KDoj1Oc01vWH8CfPmPp/rWkaDWn8ax/6YB/Uiitrt7TtP7wCP4sGtKdo2TxcU/wB6hohzt9PuMkjmz3d1Tk77zEdApCx6/wC4qOt7osLZO52KgnDEs0dIyD8gK68ahao1OmS58RaPTcwH5GqJpcDNOjyJ7l5H2C1E52FJJA9iJPH5V6B2B2DYa0l3wmRmGRx19xIFXv3K0hMhIPqDmiPZnZ5seRZKEzkkxjoKrOSkqSJQi4vca32TZH4J+ZP+dQ7U7SGlTctoMB+HcE5wIZjE+3X6ZJ7a4zt7tpC122drAFYGDGwbpk4IBG7HsOhFFRSRsk6Of7d7TNy8xc7RJlFPBAE7T81jJEkcAYolrLWla3Zd2NvFthbthiwVVzuk4bduX0EEz6wGi0zid0s1qSYHxbGFwkkSACUgiJ/MYdRozu3hwFtMd6gyg3HBUjkMYMGPibimtUkc1rlm7R65tly1sUWXUMpLKfD8zkGSYmSQMEzH1GtfBZNqwQo2tBYzEeYzK8SY5E1HS3jEQkhlBJCFDghQZGfiPsDJBq/XIL6lEfaLYSFEEzncQABPyGBAxSNbg1MzP2i3ixeSQIJGcCQYUDA9fbjpTreLi4QSFmV58wWSSxEYmPtFDe0LgUyPMcTuMlsndnqBETz5vasq35YAFmH4cBRJmfb1FUULVoyk6C9nUuVBW7HqCw5J/tE9I4xT1HTOiDaVEySYG4T7EkfpSoaV4C7krWq0NtVtpZ8Yg7nuPjcJHl2gfARPSR86Kt3nTTgWtNp7awqhiSxJ2jG49THU+tZuy+5SuFa7fCyJ2gCedvJPMwOOTRod3NHYGVuXRBJlgeIxsUgtPoAferPItXPyOiMXXAM1HfEN/wAxj7KI/SKpt6rVXf6vTXGn8TyB9z/nV+p7a8PcLGnS0old0CZUw8qqlpEg/KTxW7u/cZyBcY29rMhBMgNtV0ALDmC5IkkEfSoSwx5km/VtllmlwtvRUYbfd3X3P6y5btqegyfy/wA6I6LufbSN95zHRfIv2yfzrsLKWyu6SQBPEDHOeOlYdR2nZJKW2VmG2FWJJ5AVp8zQCQAelZS0qlt6I0t+d/UHWLGnQr4Sh3JgbiQADyfEaVMtsWBkZo9YtFgDMD6zjnFBb/Z9rxVQyFG7eq+ZZEAjxMwR5SQxUEFaN9jWXKFnZoZmZQfwpMIAOmAD155oyeqrFja2MTaG74pbfK4gbPwwNw3TzIn61s/Y7hV18WEfb5doMFTJMzmeIPp86Ikhf8/9aDdv9s+EgKFQSwGRIMmIHuZpJZHHqM6S3MGv7P1AMLqLXsD+7Py5zQ79u1Kzbe4k/wAQg/QR/v3oZqb5ctcvbp5kyvAHABwOcR1qOo1lsAbQM48uCQRj39PvXNJtvYTW26jZvuMsZ83/AFsGGeeTisV7VMreQWzMmFEGOkxzWXSJvDKlkEKP489eZMngYFV6e41ohlSMnzEYAj4ZpViq75/nmdWLBT9/nwdb+jv9DodLqGPKEY/EQF4+/wCsVlv9sKvIE9Bz+RrP/TbcFFYmB15+WZ6Y+dbNLplIJezbUyMEkwJEyD5eYqDxqO80c+fs84PdJfErtvqbgDBxsYA+SMegI5n69Kt/pBQSu25I6ebpj1+dV67U3lgIo2xEqODPG3piP9KFuxLS84iR8MDrj1p449fNV5HTi7O88U3SVdKv4+J0lu6WH9WwEmCSoOOn1/37xIfjaR826e56T9aEaYWxDrdfpCz5s/KtvhXel0gdRtE9I46fSpPHpfP6nLPHBOtXzT/cv2kTvQFZ5An26xPzxWXtE2tkrbVwSABjJYgAD1OfyNaFDDHiKcHlefXgz9PlzUNK6KdziDOFAlQVBzMDaSB16nHpRi2t+fmSlGls0YrOoQu4BcBYPiAttG4bgCfwmCTz0rVZN+AVuk9YYmR6jHPzoXrdZvuMEYMrQz85HRCgGYET7g5qzQu/xArsLgeSPhQoDMj1YdePz6ZY7VpUIsjQatd47iHYy+IyxKr8WfT1MAmiOh7z2bi7pNsR/wA2Fg8xz71ygbbca5tKiZLYkQsx6nDR9RnEULtXbZPi6hmKhgxhQwhmgK4/EPXkwT9b4062GWaR3up7xAQR5kOZQbmKhSd0H1IYARPlJnEV59rdWly45cEyxliTljyJmQOkAiiVtJQCVRckeXC4krJyBtJyMc1SmlXyMrW3KqC4bhDuVYggBlkx1k9SDTxkmCbbZm7QJTem+SVXaFwoDQ7gKBgHngekHFWabZscXrZXChW2tAO7MMCBEbpkNHoJNK7oLpvXBcPww5IGCFwjTwqmZnpB9KjptYfDVbbbjbcmHEySADtJ6YBIyYwJmqdCfBZds2lQko0FwMsYLH4gASPg3LHHQkng5uzUW3dHhs4IiAwkbwR8Xosx+c1qW699EZVfYsNfYgr4rF4P7wDCrKjkdKotXnuLcWSUExtwvxkwOJG0PzHAOaXfgDdkL1hblt2U2yypLEkCZEkIpiYjpmsuk09pRgknbuJAJ8MqQJIGG5P5e9bL3ZStpy6MrbZZgm7owBOQICg8YMSYxVVlmAxa3q5JGBkJLvBGSMDIxzRT2pDONciSxORbn1k5zkSAYGIxSrPd1AMFUgGTBJB5I9R6UqdRYtMvGtvktBNuCLY3krtDkbYLKISIgciB6TXedzOyXFtbjs7PcyA5woMkFQcgkHJOTma817M7SNtwywWAAGCWI4YBuRjoTGPeus7M7y6qbrypUr5mG1bloPKL4byyodygsCsTHUinycF4Pc7/APoaxbZr1xQ5wwG1TtKgztxOccnp86A3+0bdy4tpkG4ElgQqBgQQzHzQHVkMn04npk7c70i5YXwi+8TO7yOComSEOQeOB8JnoK4TtPtx7ruw8oczEAwRJ8o6bmJJPqx5qULmHI0mdNr+8b37gtoQqFs+GJMhpE3DJbG6AIAJHSr+zXbfv/q/CJ3+Ztgt5FlzeaVIDT1MhjAxXJo2JhpJEt6D6j1zE1qYkoLdrb5/Ea4AY+FiF3E4mAW/ve9FrwJ34nrGj7TspaVrrBGeWYXCu4lj12k4ggD+zArHqu92kRYW4DtwAoMY4A6R0rhdBpEJi4dzfMjPuPXj71ssXVIlRAkjjIj9K5Z5GtiqmEO1O8ZviBbuKgkkx8UcCPn7Ghaa1WUBlB9C0K0R8QPQ/b3rb43z+tU3lVjJUSOscfWue03uhJO3dkbdpABtuQDu+La0kxy8ZA9JPOa1DSK2dqsTIB49TgRjIPWh57OUtuV2U8Y45BxUhoWyQ2ciQNvMzhSAcE5InAzAig0v7gW+bNVvRkAKioN07iIXILCDjODyCIqq5ZvXfIAFU4LnY0fxSBkciotprsgllgcDK9AJlfTMc81C8l7MQTgZPIzMnryTxEmsubtBjPS7e5p0+i2rCqQwx5oLZwYjgcHFbLNgq3Bn5r8jyc8/+9BLFq+OkYPDAiZmSuM/p71e1q5tAIfdOSH289TGSfn+VCUG+ZL+fEWUpSeqTthUjqGieM8HHXEmYFZV0aNhzbYdSuW8vy5P+fWho0N3iVOepk8yJMQeuCKl/QzkGbnIg4n/AA8FemBjHzrKCX9RouS4YRs6e3ZO7xPKZkFQ3QZLfKfz9Kk2vtWxMiSZkHniAIiefXoKHjslS0m6zbYx9BzP39B0phZE27XgyNzCWcwRMbmMECOYj4feaZY4ze7b+gZ5JSdyJantomSJ3CCqqJBydxZhyfh8o+dCr2puRfaCoaZZ2867T5wnECSs+8cmjAueGI3KN3wECYH9r5CD9fnFevuoy7nMWyASu3zOwMhc8cZHuKtCoulEk3sYvBNpAUja0uSZExxuIaVX/pz19az67QvaVVjYWBZTIjO0CIJ9VPyq8Nm4Sw8MldyFVIECVCEHLFt0yJyfaqdhvJubd+7gKgnaocyI9BxHHPotXTrcCNdw20tsrgvdKiCvU7l+M5JAAiR6Z9Kqt3LXls2gV8W5bC7pwGmA4JiZbHPP3z/0ej3UUKdghevPvCkTMkgxMGs/bNpVdwFLMfMpYZ2AGZUMYExB9FnHA0abofTsbtNo432luAwpmSGEDAg46iJ4EEVb4t90AhRtRAWDCRvkBuDBLT9uuKF9n6xoIjd+7CiCQQqgDbjDAycH+HmrLDeIrzCtGFiN2DAB+E8kx7/Us4sVWi7tHVJBAB2/DtByZUBrgJYks3vJgmME1Veuoq+diSFQfCZ3oZyTIkqSuY5mMCp9l6VrlxjeNyXknYq5GRK5gjptx6Y5Ga72U3iMi7FKAxMENEGVALeaM7eQJmaaNXVjNN7k9Hrd1sWSSoG7yruk+JswYAkAoreYxI9ABVXabiTFzeLhSVBJaQPOpCgA56A9Pqa+1b91rjG9lmJJOCpOAYHoBsXHoJ4rOASVJUbCRJUQOm4yDj06ZFUpACvYnbdyxcPh7unJVAxQEDcsAMh9DJ4zNK5qGB8TeN5Fz4BCorchhHl+JuQPTNDSWZjxuYgrxkgwBPXFU2t04UAscHEdAMsIA5M+9K4W7NbaoLa/WSVACLtVVO7zFiPxiFEA+nrNKg8FcFip9BJpUdCMkHU7Tt3L3iC0q+Q2FtCVVEALAh1EyTuOBjic4o1sna3lLlCW2giQhlWyYHlCiAB8IxSpUJKmh7shqNVc2w58y75PPOI+eDmhWmtMX8gExugxgqC05EdCcelKlTx2VgCVlSdwhWAgAGYHEwOmP5RW65olQ72lRgAgzIx6ZGOvyxSpVy5JtTUV1KQSofTqCRAJQ/D5ioMzys8x9KPae5tQBxBAA9fzHP8ApSpVz5HctLHcUotlwSRNQW2MdPfNKlXNYkkWtZH4fzqItfn60qVK2JJErQJ5FSNqeKVKhYElRV+zwYqaWjnP+/rSpUb2BpQ/7OcGaa7pyyFQ/Q+2SDyYpUqCk+RoxQF/Z7mnt3SSNqbdp6tO1f7uIEUrtxrbFLYEAHcCfiG2FJMZwY6felSrvxy1Rt+f2FyLTwYkuRCb8dSqxJ3GQZ5joegPWr+z7ZuFbdsg+Q3NrYi2oAGwxG7noOPkKVKuirYGZLt+2y3XuBS9vwwqLuGGGG3CAR0yZA4HpbqtVZeBbUnxFQKMhmfcykMTiJ9/vSpU+hUmKT7G7QFhvELMot3FYE+bKTtZlGMGYEGCfrUdNqlDeK21lYuT5cMGG0AjkSByI5maVKlra/ML2Zku6aWuXELbT4h2iBs3M0COIyQImKrPh7SCDuAG3gBjkQRBjOZB6ClSrJ22vAydsIaF72kJujCwJgKwVHwQFeZJk444z1EbRcW3ZiTgi2WMtgbcNnOCMniOYFKlSxdq2PW7RXp3/dl7oQlAAFCxhgSpBGJEbsyOMYim1umJtNduXJJgQZPl6AEQJ+gGTSpUX+JLzJSbtIwai4EXbDk/DBaPNgnI5HWqNRah1UvEqMxBk87iOeo60qVVi9h2zTZ0SR8BPvIH5UqVKtXmA//Z"
          alt="GRIET Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Welcome to GRIET
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl"
            >
              Shaping Tomorrow's Engineers Today
            </motion.p>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{highlight.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Latest Announcements</h2>
          <div className="space-y-4">
            {announcements.map((announcement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{announcement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{announcement.date}</p>
                </div>
                <ChevronRight className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;