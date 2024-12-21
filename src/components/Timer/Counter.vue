<script>

export default {
    name: 'Counter',
    props: ['year', 'month', 'date', 'hour', 'minute', 'second', 'millisecond'],
    data() {
        return {
            displayDays: 0,
            displayHours: 0,
            displayMinutes: 0,
            displaySeconds: 0,
            loaded: false,
            expired: false,
            d: "Días",
            h: "Horas",
            m: "Min",
            s: "Seg",
            title: "Falta",
            title1: "¡Llegó el día!"

        };
    },
    computed: {
        _seconds() {
            return 1000;
        },
        _minutes() {
            return this._seconds * 60;
        },
        _hours() {
            return this._minutes * 60;
        },
        _days() {
            return this._hours * 24;
        },
        end() {
            return new Date(
                this.year,
                this.month - 1, // Los meses en JavaScript van de 0 a 11
                this.date,
                this.hour,
                this.minute,
                this.second,
                this.millisecond
            );
        }
    },
    mounted() {
        this.showRemaining();
    },
    methods: {
        formatNum(num) {
            return num < 10 ? '0' + num : num;
        },
        showRemaining() {
            const timer = setInterval(() => {
                const now = new Date();
                const distance = this.end.getTime() - now.getTime();

                if (distance < 0) {
                    clearInterval(timer);
                    this.expired = true;
                    this.loaded = true;
                    return;
                }

                const days = Math.floor(distance / this._days);
                const hours = Math.floor((distance % this._days) / this._hours);
                const minutes = Math.floor((distance % this._hours) / this._minutes);
                const seconds = Math.floor((distance % this._minutes) / this._seconds);

                this.displayMinutes = this.formatNum(minutes);
                this.displaySeconds = this.formatNum(seconds);
                this.displayHours = this.formatNum(hours);
                this.displayDays = this.formatNum(days);
                this.loaded = true;
            }, 1000);
        }
    }
};
</script>

<template>
    <div v-if="loaded" class="container">
        <section class="title__counter">
            <h3 v-show="!expired" class="counter__txt">{{ title }}</h3>
            <h3 v-show="expired" class="counter__txt">{{ title1 }}</h3>
        </section>

        <section class="counter__container">
            
            <div class="container_hora">
                <div class="counter__content dia">
                    <h1>{{ displayDays }}</h1>
                    <span class="counter__label">{{ d }}</span>
                </div>
                <div class="counter__content hora">
                    <h1>{{ displayHours }}</h1>
                    <span class="counter__label">{{ h }}</span>
                </div>
                <div class="counter__content minuto">
                    <h1>{{ displayMinutes }}</h1>
                    <span class="counter__label">{{ m }}</span>
                </div>
                <div class="counter__content segundos">
                    <h1>{{ displaySeconds }}</h1>
                    <span class="counter__label">{{ s }}</span>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
}

.counter__container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height:auto;
}
.container_hora{
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    width: 250px;
    height: auto;
}

.counter__txt { /*title*/
    font-size: 60px;
    text-align: center;
    color: var(--title-timer);
    font-family: var(--font-title-section);
    line-height: 100%;
    margin-bottom:1rem;
}
.counter__content {
    /*... */
    width:70px;
    height:auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.dia > h1,
.hora >h1,
.minuto>h1,
.segundos>h1{
    color:var(--font-primary-color);
    font-family: var(--font-btn);
    font-weight: lighter;
    font-size: 1.5rem;
}
.counter__label {
    color: #3F3F3F;
 text-align: center;
 font-family: var(--font-btn);
 font-size: .8rem;
 font-style: normal;
 font-weight: 400;
 line-height: normal;
}
.dia,
.hora,
.minuto{
    border-right:1px solid var(--line-timer); 
}

@media (min-width: 768px) and (max-width: 991px) {
    .container {
        width: 100%;
        height: 100%;
    }
    .counter__container {
        width: 600px;
        height:auto;
    }
    .counter__txt { 
        font-size: 1.5rem;
        
    }
    .counter__content {
        width:130px;
        height:100%;
        margin-left: 1rem;
    }
    .dia > h1,
    .hora >h1,
    .minuto>h1,
    .segundos>h1{
        font-size: 60px;
    }
    .counter__label {
        font-size: .9rem;
    }

}

@media (min-width: 1025px) {
    .container {
        width: 100%;
        height: 100%;
    }
    .counter__container {
        width: 800px;
        height:auto;
    }
    .counter__txt { 
        font-size: 2rem;
        
    }
    .counter__content {
        width:350px;
        height:100%;
        margin-left: 1rem;
    }
    .dia > h1,
    .hora >h1,
    .minuto>h1,
    .segundos>h1{
        font-size: 80px;
        padding: 0 1rem;
    }
    .counter__label {
        font-size: 1rem;
    }
}
</style>