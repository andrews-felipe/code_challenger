<template>
  <div class="input__search">
    <div class="custom__select">
      <div class="select-box">
        <div class="select-box__current" tabindex="1">
          <div class="select-box__value">
            <input
              class="select-box__input"
              type="radio"
              id="0"
              value="1"
              name="Ben"
              checked="checked"
            />
            <p class="select-box__input-text">Cream</p>
          </div>
          <div class="select-box__value">
            <input
              class="select-box__input"
              type="radio"
              id="1"
              value="2"
              name="Ben"
              checked="checked"
            />
            <p class="select-box__input-text">Cheese</p>
          </div>
          <div class="select-box__value">
            <input
              class="select-box__input"
              type="radio"
              id="2"
              value="3"
              name="Ben"
              checked="checked"
            />
            <p class="select-box__input-text">Milk</p>
          </div>
          <div class="select-box__value">
            <input
              class="select-box__input"
              type="radio"
              id="3"
              value="4"
              name="Ben"
              checked="checked"
            />
            <p class="select-box__input-text">Honey</p>
          </div>
          <div class="select-box__value">
            <input
              class="select-box__input"
              type="radio"
              id="4"
              value="5"
              name="Ben"
              checked="checked"
            />
            <p class="select-box__input-text">Toast</p>
          </div>
          <img
            class="select-box__icon"
            src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
            alt="Selecionar"
            aria-hidden="true"
          />
        </div>
        <ul class="select-box__list">
          <li>
            <label class="select-box__option" for="0" aria-hidden="aria-hidden">Cream</label>
          </li>
          <li>
            <label class="select-box__option" for="1" aria-hidden="aria-hidden">Cheese</label>
          </li>
          <li>
            <label class="select-box__option" for="2" aria-hidden="aria-hidden">Milk</label>
          </li>
          <li>
            <label class="select-box__option" for="3" aria-hidden="aria-hidden">Honey</label>
          </li>
          <li>
            <label class="select-box__option" for="4" aria-hidden="aria-hidden">Toast</label>
          </li>
        </ul>
      </div>
    </div>
    <input type="text" />
    <button type="submit">
      <i class="fa fa-search flip"></i>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.custom__select {
  width: 25%;
}
.input__search {
  width: 70%;
  display: flex;
  background: #ffffff;
  box-shadow: 0 15px 30px -10px transparentize(#000, 0.9);
  justify-content: space-between;
}
input {
  border: unset;
  width: 62%;
  background: #ffffff;
}
*:focus {
  outline: none;
}
// Estilos do select <>

.select-box {
  position: relative;
  display: block;
  width: 100%;
  margin: 0 auto;

  &__current {
    position: relative;
    box-shadow: 0 15px 30px -10px transparentize(#000, 0.9);
    cursor: pointer;
    outline: none;

    &:focus {
      & + .select-box__list {
        opacity: 1;
        animation-name: none;

        .select-box__option {
          cursor: pointer;
        }
      }
      .select-box__icon {
        transform: translateY(-50%) rotate(180deg);
      }
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    width: 15px;
    opacity: 0.3;
    transition: 0.2s ease;
  }

  &__value {
    display: flex;
  }

  &__input {
    display: none;

    &:checked + .select-box__input-text {
      display: block;
    }
  }

  &__input-text {
    display: none;
    width: 100%;
    margin: 0;
    padding: 15px;
    background-color: #fff;
  }

  &__list {
    position: absolute;
    width: 100%;
    padding: 0;
    list-style: none;
    opacity: 0;

    animation-name: HideList;
    animation-duration: 0.5s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: step-start;
    box-shadow: 0 15px 30px -10px transparentize(#000, 0.9);
  }

  &__option {
    display: block;
    padding: 15px;
    background-color: #fff;

    &:hover,
    &:focus {
      color: #546c84;
      background-color: #fbfbfb;
    }
  }
}

// estilos do select </>

button[type="submit"] {
  width: 9%;
  background: #fff;
  font-size: large;
  border: unset;
  color: #bababa;
  cursor: pointer;
}

@keyframes HideList {
  from {
    transform: scaleY(1);
  }
  to {
    transform: scaleY(0);
  }
}
</style>