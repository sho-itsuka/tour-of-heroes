import { Component, OnInit, Input } from '@angular/core';
// ActivatedRoute インスタンスへのルートに関する情報を保持する
import { ActivatedRoute }           from '@angular/router';
// Location 前のビューに戻ることができる
import { Location }                 from '@angular/common';

import { HeroService } from '../hero.service';
import { Hero }        from '../hero';

@Component({
  selector:    'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls:   ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero

  constructor(
    private route:       ActivatedRoute,
    private heroService: HeroService,
    private location:    Location
  ) { }

  ngOnInit(): void {
    this.getHero()
  }
  // route.snapshot コンポーネントが作成された直後のルート情報の静的イメージ
  // paramMap URLから抽出されたルートパラメータ値の辞書
  // "id"キーは、フェッチするヒーローのidを返す
  // JSのNumber関数は文字列を数値に変換する(ヒーロのidの値となる)
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroService.getHeroes(id)
      .subscribe(hero => this.hero = hero)
  }

}
